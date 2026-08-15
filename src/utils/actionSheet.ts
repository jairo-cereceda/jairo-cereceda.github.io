import { focusTrap } from './focusTrap';

export function controlActionSheets() {
  document.addEventListener('DOMContentLoaded', () => {
    const actionSheet = document.getElementById('action-sheet');
    const actionSheetWrapper = document.getElementById('action-sheet-wrapper');
    const actionSheetCloser = document.getElementById('action-sheet-closer');

    let slideMoreInfoBtn = null as HTMLButtonElement | null;

    const openAction = () => {
      if (!actionSheet || !actionSheetWrapper || !actionSheetCloser) return;

      actionSheet.classList.remove('translate-y-full');
      actionSheet.setAttribute('aria-modal', 'true');

      actionSheetWrapper.classList.remove('opacity-0', 'pointer-events-none');
      actionSheetWrapper.classList.add('opacity-100');
      actionSheetWrapper.setAttribute('aria-hidden', 'false');
      actionSheetCloser.setAttribute('tabindex', '0');

      document.body.classList.add('overflow-y-hidden');

      if (window.matchMedia('(pointer: fine)').matches) {
        document.body.classList.add('mr-[10px]');
      }

      focusTrap(actionSheetWrapper);
    };

    const closeAction = () => {
      if (!actionSheet || !actionSheetWrapper || !actionSheetCloser) return;

      actionSheet.classList.add('translate-y-full');
      actionSheet.setAttribute('aria-modal', 'false');

      actionSheetWrapper.classList.add('opacity-0', 'pointer-events-none');
      actionSheetWrapper.classList.remove('opacity-100');
      actionSheetWrapper.setAttribute('aria-hidden', 'true');
      actionSheetCloser.setAttribute('tabindex', '-1');

      document.body.classList.remove('overflow-y-hidden');
      document.body.classList.remove('mr-[10px]');

      slideMoreInfoBtn?.focus();
    };

    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const btn = target.closest(
        '[data-action-sheet-btn]'
      ) as HTMLButtonElement;
      if (!btn) return;

      slideMoreInfoBtn = btn;
      openAction();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAction();
    });

    actionSheetWrapper?.addEventListener('click', (e) => {
      if (e.target === actionSheetWrapper) {
        closeAction();
      }
    });

    actionSheetCloser?.addEventListener('click', () => {
      closeAction();
    });
  });
}
