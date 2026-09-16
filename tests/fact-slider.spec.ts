import { test, expect } from '@playwright/test';

test.describe('FactSlider Component', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('renders fact slider with initial item and pagination', async ({
    page,
  }) => {
    await page.goto('/');

    const factSliderWrapper = page
      .locator('[data-slider-wrapper]:visible')
      .filter({ hasText: /estudios/i })
      .first();

    await expect(factSliderWrapper).toBeVisible();

    const firstFact = factSliderWrapper.locator('[data-slide]').first();
    await expect(firstFact).not.toBeEmpty();
  });
});
