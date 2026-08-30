export function createCarousel() {
  const sliderWrappers = document.querySelectorAll(
    '[data-slider-wrapper]'
  ) as NodeListOf<HTMLElement>;

  sliderWrappers.forEach((sliderWrapper) => {
    const slider = sliderWrapper.querySelector('[data-slider]') as HTMLElement;

    if (!slider) return;

    const slides = slider.querySelectorAll(':scope > [data-slide]');
    const totalSlides = slides.length;
    let currentPosition = 0;
    let intervalId: number | undefined;

    const isManegeable = slider.dataset.isManegeable === 'true' ? true : false;
    const isAutoplayable =
      slider.dataset.isAutoplayable === 'true' ? true : false;

    const thumbs = sliderWrapper.querySelectorAll(
      '[data-slider-thumb]'
    ) as NodeListOf<HTMLElement>;

    function updateThumbs() {
      if (thumbs.length === 0) return;

      let thumbIndex;

      if (currentPosition === 0) {
        thumbIndex = thumbs.length - 1;
      } else if (currentPosition === totalSlides - 1) {
        thumbIndex = 0;
      } else {
        thumbIndex = currentPosition - 1;
      }

      if (currentPosition < totalSlides - 1) {
        thumbs.forEach((thumb) => {
          thumb.classList.remove('bg-white');
          thumb.classList.add('bg-transparent');
        });

        thumbs[thumbIndex].classList.add('bg-white');
      }
    }

    function moveSlide(position: number) {
      if (position === currentPosition) return;

      currentPosition = position;

      const width = slides[0].clientWidth;

      slider.scrollTo({
        left: position * width,
        behavior: 'smooth',
      });

      updateThumbs();
    }

    function autoPlay() {
      stopAutoPlay();

      intervalId = window.setInterval(() => {
        moveSlide(currentPosition + 1);
      }, 4000);
    }

    if (isManegeable) {
      slider.addEventListener('scrollend', () => {
        stopAutoPlay();

        const width = slides[0].clientWidth;

        currentPosition = Math.round(slider.scrollLeft / width);

        if (currentPosition === totalSlides - 1) {
          currentPosition = 1;

          slider.scrollTo({
            left: width,
            behavior: 'instant',
          });
        }

        if (currentPosition === 0) {
          currentPosition = totalSlides - 2;

          slider.scrollTo({
            left: currentPosition * width,
            behavior: 'instant',
          });
        }

        updateThumbs();

        setTimeout(autoPlay, 4000);
      });

      if (isAutoplayable) {
        document.addEventListener('visibilitychange', () => {
          if (document.hidden) {
            stopAutoPlay();
          } else {
            autoPlay();
          }
        });
      }
    }

    if (thumbs.length > 0) {
      thumbs.forEach((thumb) =>
        thumb.addEventListener('click', () => {
          const thumbId = Number(thumb.dataset.sliderThumb) + 1;

          moveSlide(thumbId);
        })
      );
    }

    function stopAutoPlay() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    }

    function initializeCarousel() {
      const width = slides[0].clientWidth;

      currentPosition = 1;

      slider.scrollTo({
        left: width,
        behavior: 'instant',
      });

      updateThumbs();
    }

    initializeCarousel();
    if (isAutoplayable) {
      autoPlay();
    }

    document.addEventListener('DOMContentLoaded', () => {
      slider.classList.add('hidden');

      setTimeout(() => {
        slider.classList.remove('hidden');
      }, 100);
    });
  });
}
