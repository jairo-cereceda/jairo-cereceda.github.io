import { test, expect } from '@playwright/test';

test.describe('ActionSheet Accessibility & Behavior', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/techs');
    await page.locator('[data-more-info-btn]:visible').first().click();
  });

  test('locks body scroll when ActionSheet is open and unlocks on close', async ({
    page,
  }) => {
    await expect(page.locator('body')).toHaveClass(/overflow-y-hidden/);
    await page.keyboard.press('Escape');
    await expect(page.locator('body')).not.toHaveClass(/overflow-y-hidden/);
  });

  test('closes ActionSheet when clicking the backdrop outside content', async ({
    page,
  }) => {
    const wrapper = page
      .locator('[data-sheet-wrapper], #action-sheet-wrapper, #techs-wrapper')
      .first();
    await wrapper.click({ position: { x: 10, y: 10 } });
    await expect(wrapper).toHaveClass(/opacity-0/);
  });

  test('traps keyboard Tab focus inside the open ActionSheet', async ({
    page,
  }) => {
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('Tab');
      const isInsideWrapper = await page.evaluate(() => {
        const active = document.activeElement;
        const sheet = document.querySelector(
          '[data-sheet-wrapper], #action-sheet-wrapper, #techs-wrapper'
        );
        return sheet?.contains(active) ?? false;
      });
      expect(isInsideWrapper).toBe(true);
    }
  });
});
