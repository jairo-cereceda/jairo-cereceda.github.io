import { focusTrap } from './focusTrap';

let isInitialized = false;
let lastActiveButton: HTMLButtonElement | null = null;
const lang = navigator.language;

export function controlMoreInfo() {
  if (!isInitialized) {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;

      if (
        target.closest('#action-sheet-closer') ||
        target.id === 'action-sheet-wrapper'
      ) {
        closeActionSheet();
        return;
      }

      const btn = target.closest(
        '[data-more-info-btn]'
      ) as HTMLButtonElement | null;

      if (!btn) return;

      if (window.innerWidth > 768) {
        toggleAccordion(btn);
        return;
      }

      openActionSheet(btn);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeActionSheet();
      }
    });

    isInitialized = true;
  }
  disableTabElements();

  const openActionSheet = (btn: HTMLButtonElement) => {
    const { actionSheet, wrapper, closer, title, description } = getElements();

    if (!actionSheet || !wrapper || !closer) return;

    if (title) title.textContent = btn.dataset.title ?? '';
    if (description) description.textContent = btn.dataset.description ?? '';

    actionSheet.classList.remove('translate-y-full');
    actionSheet.setAttribute('aria-modal', 'true');
    wrapper.classList.remove('opacity-0', 'pointer-events-none');
    wrapper.classList.add('opacity-100');
    wrapper.setAttribute('aria-hidden', 'false');
    closer.setAttribute('tabindex', '0');

    document.body.classList.add('overflow-y-hidden');

    focusTrap(wrapper);

    enableTabElements();
    lastActiveButton = btn;
  };

  const closeActionSheet = () => {
    const { actionSheet, wrapper, closer } = getElements();

    if (!actionSheet || !wrapper || !closer) return;

    actionSheet.classList.add('translate-y-full');
    actionSheet.setAttribute('aria-modal', 'false');

    wrapper.classList.add('opacity-0', 'pointer-events-none');
    wrapper.classList.remove('opacity-100');
    wrapper.setAttribute('aria-hidden', 'true');
    closer.setAttribute('tabindex', '-1');

    document.body.classList.remove('overflow-y-hidden');
    document.body.classList.remove('mr-[10px]');

    disableTabElements();
    lastActiveButton?.focus();
  };

  function getElements() {
    return {
      actionSheet: document.getElementById('action-sheet'),
      wrapper: document.getElementById('action-sheet-wrapper'),
      title: document.getElementById('action-sheet-title'),
      description: document.getElementById('action-sheet-description'),
      closer: document.getElementById('action-sheet-closer'),
    };
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeActionSheet();
  });

  isInitialized = true;

  function toggleAccordion(btn: HTMLButtonElement) {
    const accordion = btn.closest('[data-more-info]');
    const content = accordion?.querySelector(
      '[data-more-info-content]'
    ) as HTMLElement | null;

    if (!content) return;

    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      content.classList.add('max-h-0');
      content.classList.remove('max-h-96');

      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = lang === 'es-ES' ? 'Ver más' : 'Show more';
    } else {
      content.classList.remove('max-h-0');
      content.classList.add('max-h-96');

      btn.setAttribute('aria-expanded', 'true');
      btn.textContent = lang === 'es-ES' ? 'Ver menos' : 'Show less';
    }
  }

  function disableTabElements() {
    const { wrapper } = getElements();

    const tabElements = wrapper?.querySelectorAll(
      'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

    tabElements?.forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
  }

  function enableTabElements() {
    const { wrapper } = getElements();

    const tabElements = wrapper?.querySelectorAll(
      'button, a[href], input, textarea, select, [tabindex="-1"]'
    );

    tabElements?.forEach((element) => {
      element.removeAttribute('tabindex');
    });
  }
}
