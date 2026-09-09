import { focusTrap } from './focusTrap';

let isInitialized = false;
let lastActiveButton: HTMLButtonElement | null = null;

export function controlActionSheets() {
  if (!isInitialized) {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const btn = target.closest(
        '[data-action-sheet-btn]'
      ) as HTMLButtonElement;

      if (btn) {
        openAction(btn);
      }

      if (
        target.closest('#action-sheet-closer') ||
        target.id === 'action-sheet-wrapper'
      ) {
        closeAction();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAction();
    });

    isInitialized = true;
  }

  const openAction = (btn: HTMLButtonElement) => {
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
    if (window.matchMedia('(pointer: fine)').matches) {
      document.body.classList.add('mr-[10px]');
    }

    focusTrap(wrapper);

    lastActiveButton = btn;
  };

  const closeAction = () => {
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
    if (e.key === 'Escape') closeAction();
  });

  isInitialized = true;
}
