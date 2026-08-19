export function createScroller() {
  const scrollers = document.querySelectorAll(
    '[data-scroller]'
  ) as NodeListOf<HTMLElement>;

  scrollers.forEach((scroller) => {
    const slides = scroller.querySelectorAll(':scope > [data-slide]');
    const totalSlides = slides.length;

    let currentPosition = 0;
    const thumbs = document.querySelectorAll(
      '[data-slider-thumb]'
    ) as NodeListOf<HTMLElement>;
    let cursorInside = false;

    let touchLastY = 0;
    let touchAccumulator = 0;
    let touchStartTime = 0;
    let shortSwipeHandled = false;

    const SWIPE_STEP = 50;
    const SHORT_SWIPE_TIME = 500;

    function updateThumbs() {
      if (!thumbs) return;

      const thumbIndex = currentPosition;

      if (currentPosition < totalSlides) {
        thumbs.forEach((thumb) => {
          thumb.classList.remove('bg-white');
          thumb.classList.add('bg-transparent');
        });

        thumbs[thumbIndex].classList.add('bg-white');
      }
    }

    function updateScroller() {
      const width = slides[0].clientWidth;
      scroller.style.transform = `translateX(-${currentPosition * width}px)`;

      updateThumbs();
    }

    function moveSlide(position: number) {
      if (position === currentPosition) return;

      currentPosition = position;
      updateScroller();
    }

    scroller.addEventListener('mouseenter', () => {
      cursorInside = true;
    });

    scroller.addEventListener('mouseleave', () => {
      cursorInside = false;
    });

    scroller.addEventListener('wheel', (e) => {
      if (!cursorInside) return;

      e.preventDefault();

      if (e.deltaY > 0) {
        if (currentPosition < totalSlides - 1) {
          moveSlide(currentPosition + 1);
        }
      } else if (e.deltaY < 0) {
        if (currentPosition > 0) {
          moveSlide(currentPosition - 1);
        }
      }
    });

    scroller.addEventListener('touchstart', (e) => {
      touchLastY = e.touches[0].clientY;
      touchAccumulator = 0;
      touchStartTime = Date.now();
      shortSwipeHandled = false;
    });

    scroller.addEventListener(
      'touchmove',
      (e) => {
        const currentY = e.touches[0].clientY;
        const deltaY = touchLastY - currentY;

        touchLastY = currentY;
        touchAccumulator += deltaY;

        if (!shortSwipeHandled) {
          if (Math.abs(touchAccumulator) >= SWIPE_STEP) {
            if (touchAccumulator > 0) {
              if (currentPosition < totalSlides - 1) {
                moveSlide(currentPosition + 1);
              }
            } else {
              if (currentPosition > 0) {
                moveSlide(currentPosition - 1);
              }
            }

            shortSwipeHandled = true;
            touchAccumulator = 0;
            return;
          }
        }

        const elapsedTime = Date.now() - touchStartTime;

        if (elapsedTime < SHORT_SWIPE_TIME) {
          return;
        }

        if (touchAccumulator >= SWIPE_STEP) {
          if (currentPosition < totalSlides - 1) {
            moveSlide(currentPosition + 1);
          }

          touchAccumulator -= SWIPE_STEP;
        }

        if (touchAccumulator <= -SWIPE_STEP) {
          if (currentPosition > 0) {
            moveSlide(currentPosition - 1);
          }

          touchAccumulator += SWIPE_STEP;
        }
      },
      { passive: true }
    );

    scroller.addEventListener('touchend', () => {
      touchLastY = 0;
      touchAccumulator = 0;
      touchStartTime = 0;
      shortSwipeHandled = false;
    });

    if (thumbs) {
      thumbs.forEach((thumb) =>
        thumb.addEventListener('click', () => {
          const thumbId = Number(thumb.dataset.sliderThumb) + 1;

          moveSlide(thumbId);
        })
      );
    }

    updateScroller();
  });
}
