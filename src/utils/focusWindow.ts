let isInitialLoad = true;

export function handleFocusOnNavigate() {
  if (isInitialLoad) {
    isInitialLoad = false;
    return;
  }

  if (window.innerWidth < 1024 || window.location.pathname === '/') {
    return;
  }

  const windowContainer = document.querySelector<HTMLElement>('#main-window');
  if (!windowContainer) return;

  requestAnimationFrame(() => {
    const heading = windowContainer.querySelector<HTMLElement>(
      'h1, [data-page-title]'
    );
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus();
      return;
    }

    windowContainer.setAttribute('tabindex', '-1');
    windowContainer.focus();
  });
}
