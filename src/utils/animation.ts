export function generateAnimations() {
  const leftItems = document.querySelectorAll<HTMLElement>(
    '[data-left-animation]'
  );

  const rightItems = document.querySelectorAll<HTMLElement>(
    '[data-right-animation]'
  );

  const topItems = document.querySelectorAll<HTMLElement>(
    '[data-top-animation]'
  );

  const bottomItems = document.querySelectorAll<HTMLElement>(
    '[data-bottom-animation]'
  );

  leftItems?.forEach((item) => {
    requestAnimationFrame(() => {
      item.classList.remove('-translate-x-animation');
    });
  });

  rightItems?.forEach((item) => {
    requestAnimationFrame(() => {
      item.classList.remove('translate-x-animation');
    });
  });

  topItems?.forEach((item) => {
    requestAnimationFrame(() => {
      item.classList.remove('-translate-y-animation');
    });
  });

  bottomItems?.forEach((item) => {
    requestAnimationFrame(() => {
      item.classList.remove('translate-y-animation');
    });
  });
}

export function generateWindowAnimation() {
  document.getElementById('main-window')?.classList.remove('scale-window');
  document.querySelector('h1')?.classList.remove('scale-title');
}
