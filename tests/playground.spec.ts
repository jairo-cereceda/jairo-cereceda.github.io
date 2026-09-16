import { test, expect } from '@playwright/test';

test.describe('Playground and Dynamic Slugs', () => {
  test('displays component list and navigates to dynamic markdown slug', async ({
    page,
  }) => {
    await page.goto('/playground');

    const firstCard = page.locator('a[href^="/playground/"]:visible').first();
    await expect(firstCard).toBeVisible();

    const expectedHref = await firstCard.getAttribute('href');
    await firstCard.click();

    await expect(page).toHaveURL(expectedHref!);
    await expect(page.locator('h1:visible').first()).toBeVisible();
  });
});
