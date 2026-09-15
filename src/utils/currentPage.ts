export function updateCurrentPage() {
  const currentPath = window.location.pathname;

  document
    .querySelectorAll<HTMLAnchorElement>('[data-page]')
    .forEach((link) => {
      const linkUrl = new URL(link.href, window.location.href);

      if (linkUrl.pathname === currentPath) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
}
