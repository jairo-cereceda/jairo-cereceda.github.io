export function createCarousel() {
  const sliders = document.querySelectorAll(
    '[data-slider]'
  ) as NodeListOf<HTMLElement>;

  sliders.forEach((slider) => {
    const slides = slider.querySelectorAll(':scope > [data-slide]');
    const totalSlides = slides.length;

    let currentPosition = 1;
    let intervalId: number | undefined;
    let startX = 0;
    let isAnimating = false;
    const isManegeable = slider.dataset.isManegeable === 'true' ? true : false;
    const isAutoplayable =
      slider.dataset.isAutoplayable === 'true' ? true : false;
    const thumbs = document.querySelectorAll(
      '[data-slider-thumb]'
    ) as NodeListOf<HTMLElement>;

    function updateThumbs() {
      if (!thumbs) return;

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

    function updateCarousel() {
      const width = slides[0].clientWidth;
      slider.style.transform = `translateX(-${currentPosition * width}px)`;

      updateThumbs();
    }

    function moveSlide(position: number) {
      if (isAnimating || position === currentPosition) return;

      isAnimating = true;

      slider.classList.add('transition-transform', 'duration-300');
      currentPosition = position;
      updateCarousel();
    }

    function autoPlay() {
      setTimeout(() => {
        slider.classList.add('duration-300', 'transition-transform');
      }, 100);

      intervalId = window.setInterval(() => {
        moveSlide(currentPosition + 1);
      }, 4000);
    }

    slider.addEventListener('transitionend', () => {
      if (currentPosition === totalSlides - 1) {
        slider.classList.remove('transition-transform', 'duration-300');
        currentPosition = 1;
        updateCarousel();

        requestAnimationFrame(() => {
          isAnimating = false;
        });
        isAnimating = false;
      } else if (currentPosition === 0) {
        slider.classList.remove('transition-transform', 'duration-300');
        currentPosition = totalSlides - 2;
        updateCarousel();

        requestAnimationFrame(() => {
          isAnimating = false;
        });
      } else {
        isAnimating = false;
      }
    });

    if (isManegeable) {
      slider.addEventListener('pointerdown', (e) => {
        startX = e.clientX;
        if (isAutoplayable) stopAutoPlay();
      });

      slider.addEventListener('pointerup', (e) => {
        if (isAnimating) return;

        const distance = e.clientX - startX;

        if (distance > 50) {
          moveSlide(currentPosition - 1);
        } else if (distance < -50) {
          moveSlide(currentPosition + 1);
        }

        if (isAutoplayable) autoPlay();
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

    if (thumbs) {
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

    updateCarousel();
    if (isAutoplayable) {
      autoPlay();
    }
  });
}
