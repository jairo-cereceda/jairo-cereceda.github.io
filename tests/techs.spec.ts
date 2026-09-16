import { test, expect } from '@playwright/test';

test.describe('Techs - Mobile (ActionSheet)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('opens the ActionSheet upon clicking more info and closes it with Escape', async ({
    page,
  }) => {
    await page.goto('/techs');

    const infoBtn = page.locator('[data-more-info-btn]:visible').first();
    const expectedTitle = await infoBtn.getAttribute('data-title');

    await infoBtn.click();

    const wrapper = page
      .locator('[data-sheet-wrapper], #action-sheet-wrapper, #techs-wrapper')
      .first();
    await expect(wrapper).toHaveClass(/opacity-100/);

    if (expectedTitle) {
      const sheetTitle = wrapper.locator(
        '[data-sheet-title], #action-sheet-title'
      );
      await expect(sheetTitle).toHaveText(expectedTitle);
    }

    await page.keyboard.press('Escape');
    await expect(wrapper).toHaveClass(/opacity-0/);
  });
});

test.describe('Techs - Desktop (Accordion)', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('expands inline accordion on desktop instead of triggering the ActionSheet', async ({
    page,
  }) => {
    await page.goto('/techs');

    const infoBtn = page.locator('[data-more-info-btn]:visible').first();
    await infoBtn.click();

    const wrapper = page
      .locator('[data-sheet-wrapper], #action-sheet-wrapper, #techs-wrapper')
      .first();
    await expect(wrapper).toHaveClass(/opacity-0/);
    await expect(infoBtn).toHaveAttribute('aria-expanded', 'true');
  });
});
