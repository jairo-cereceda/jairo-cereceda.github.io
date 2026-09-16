import { test, expect } from '@playwright/test';

test.describe('Project Slider', () => {
  test('opens on Slide 1 when navigating internally from the index', async ({
    page,
  }) => {
    await page.goto('/');
    await page.locator('a[href="/projects"]:visible').click();

    const slider = page.locator('[data-slider]').first();
    await expect(slider).toBeVisible();

    await page.waitForTimeout(150);

    const activeThumb = page.locator('[data-slider-thumb].bg-white').first();
    await expect(activeThumb).toHaveAttribute('data-slider-thumb', '0');
  });
});
