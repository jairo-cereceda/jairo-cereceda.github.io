interface SliderController {
  start: () => void;
  stop: () => void;
  restoreScroll: () => void;
  destroy: () => void;
}

const activeSliders = new Map<HTMLElement, SliderController>();
let isTransitioning = false;

export function createCarousel() {
  activeSliders.forEach((controller, wrapper) => {
    if (!wrapper.isConnected) {
      controller.destroy();
      activeSliders.delete(wrapper);
    }
  });

  const sliderWrappers = document.querySelectorAll(
    '[data-slider-wrapper]'
  ) as NodeListOf<HTMLElement>;

  sliderWrappers.forEach((sliderWrapper) => {
    if (activeSliders.has(sliderWrapper)) {
      const controller = activeSliders.get(sliderWrapper)!;
      controller.restoreScroll();
      controller.start();
      return;
    }

    const slider = sliderWrapper.querySelector('[data-slider]') as HTMLElement;
    if (!slider) return;

    let intervalId: number | undefined;
    let scrollTimeout: number | undefined;

    const slides = slider.querySelectorAll(':scope > [data-slide]');
    const totalSlides = slides.length;
    let currentPosition = 1;

    const isAutoplayable = slider.dataset.isAutoplayable === 'true';
    const thumbs = sliderWrapper.querySelectorAll(
      '[data-slider-thumb]'
    ) as NodeListOf<HTMLElement>;

    function updateThumbs() {
      if (thumbs.length === 0) return;

      let thumbIndex: number;
      if (currentPosition === 0) {
        thumbIndex = thumbs.length - 1;
      } else if (currentPosition >= totalSlides - 1) {
        thumbIndex = 0;
      } else {
        thumbIndex = currentPosition - 1;
      }

      thumbs.forEach((thumb) => {
        thumb.classList.remove('bg-white');
        thumb.classList.add('bg-transparent');
      });

      if (thumbs[thumbIndex]) {
        thumbs[thumbIndex].classList.add('bg-white');
      }
    }

    function moveSlide(position: number) {
      const slide = slides[0] as HTMLElement;
      if (!slide) return;
      const width = slide.clientWidth;
      if (width === 0) return;

      currentPosition = position;

      slider.scrollTo({
        left: position * width,
        behavior: 'smooth',
      });

      updateThumbs();
    }

    function stopAutoPlay() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
        scrollTimeout = undefined;
      }
    }

    function autoPlay() {
      if (!isAutoplayable) return;
      stopAutoPlay();

      intervalId = window.setInterval(() => {
        const slide = slides[0] as HTMLElement;
        const width = slide?.clientWidth || 1;
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        if (
          slider.scrollLeft >= maxScrollLeft - 2 ||
          currentPosition >= totalSlides - 1
        ) {
          slider.scrollLeft = width;
          currentPosition = 1;
        }

        moveSlide(currentPosition + 1);
      }, 4000);
    }

    function handleScrollEnd() {
      if (isTransitioning) return;

      stopAutoPlay();

      const slide = slides[0] as HTMLElement;
      if (!slide) return;
      const width = slide.clientWidth;
      if (width === 0) return;

      currentPosition = Math.round(slider.scrollLeft / width);

      if (currentPosition >= totalSlides - 1) {
        currentPosition = 1;
        slider.scrollTo({
          left: width,
          behavior: 'instant',
        });
      } else if (currentPosition <= 0) {
        currentPosition = totalSlides - 2;
        slider.scrollTo({
          left: currentPosition * width,
          behavior: 'instant',
        });
      }

      updateThumbs();

      if (isAutoplayable) {
        scrollTimeout = window.setTimeout(autoPlay, 4000);
      }
    }

    function restoreScroll() {
      const slide = slides[0] as HTMLElement;
      if (!slide) return;
      const width = slide.clientWidth;
      if (width === 0) return;

      if (currentPosition >= totalSlides - 1) {
        currentPosition = 1;
      } else if (currentPosition <= 0) {
        currentPosition = totalSlides - 2;
      }

      slider.scrollLeft = currentPosition * width;
      updateThumbs();
    }

    slider.addEventListener('scrollend', handleScrollEnd);

    if (thumbs.length > 0) {
      thumbs.forEach((thumb) =>
        thumb.addEventListener('click', () => {
          const thumbId = Number(thumb.dataset.sliderThumb) + 1;
          moveSlide(thumbId);
        })
      );
    }

    function initializeCarousel() {
      const slide = slides[0] as HTMLElement;
      if (!slide) return;
      const width = slide.clientWidth;

      currentPosition = 1;
      slider.scrollLeft = width;
      updateThumbs();
    }

    initializeCarousel();
    autoPlay();

    activeSliders.set(sliderWrapper, {
      start: autoPlay,
      stop: stopAutoPlay,
      restoreScroll,
      destroy: () => {
        stopAutoPlay();
        slider.removeEventListener('scrollend', handleScrollEnd);
      },
    });
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('astro:before-swap', () => {
    isTransitioning = true;
    activeSliders.forEach((controller) => {
      controller.stop();
    });
  });

  document.addEventListener('astro:after-swap', () => {
    activeSliders.forEach((controller) => {
      controller.restoreScroll();
    });
  });

  document.addEventListener('astro:page-load', () => {
    isTransitioning = false;
  });

  document.addEventListener('visibilitychange', () => {
    activeSliders.forEach((controller) => {
      if (document.hidden) controller.stop();
      else controller.start();
    });
  });
}
