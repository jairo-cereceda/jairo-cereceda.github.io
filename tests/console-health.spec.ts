import { test, expect } from '@playwright/test';

test.describe('Site Health & Console Monitor', () => {
  test('navigates through all sections without throwing JavaScript errors', async ({
    page,
  }) => {
    const errors: string[] = [];

    // Listen for uncaught exceptions or error logs in console
    page.on('pageerror', (exception) => {
      errors.push(`PageError: ${exception.message}`);
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(`ConsoleError: ${msg.text()}`);
      }
    });

    const routes = ['/', '/projects', '/experience', '/techs', '/playground'];

    for (const route of routes) {
      await page.goto(route);
      await page.waitForTimeout(100); // Allow lifecycle scripts (startPage, focus) to settle
    }

    expect(errors).toEqual([]);
  });

  test('handles 404 gracefully on non-existent routes', async ({ page }) => {
    const response = await page.goto('/random-unknown-page');
    expect(response?.status()).toBe(404);
  });
});
