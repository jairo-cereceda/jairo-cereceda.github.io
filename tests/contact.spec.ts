import { test, expect } from '@playwright/test';

test.describe('Contact Links & Security', () => {
  test('validates external social links have proper security attributes', async ({
    page,
  }) => {
    await page.goto('/');

    const externalLinks = page.locator('a[href^="https://"]:visible');
    const count = await externalLinks.count();

    for (let i = 0; i < count; i++) {
      const link = externalLinks.nth(i);
      const target = await link.getAttribute('target');
      const rel = await link.getAttribute('rel');

      if (target === '_blank' && rel) {
        expect(rel).toContain('noopener');
      }
    }
  });

  test('validates email link format if present', async ({ page }) => {
    await page.goto('/');

    const mailLink = page.locator('a[href^="mailto"]:visible').first();
    const count = await mailLink.count();

    if (count > 0) {
      const href = await mailLink.getAttribute('href');
      expect(href).toMatch(/^mailto:/);
    }
  });
});
