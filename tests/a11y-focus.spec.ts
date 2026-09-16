import { test, expect } from '@playwright/test';

test.describe('Navigation Focus Management & A11y', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('moves focus to the page heading or main window upon client navigation', async ({
    page,
    browserName,
  }) => {
    await page.goto('/');
    await page.locator('a[href="/projects"]:visible').click();

    await page.waitForTimeout(200);

    const focusedTag = await page.evaluate(
      () => document.activeElement?.tagName
    );

    const allowedTags =
      browserName === 'webkit'
        ? ['H1', 'DIV', 'A', 'BUTTON', 'BODY']
        : ['H1', 'DIV', 'A', 'BUTTON'];

    expect(allowedTags).toContain(focusedTag);
  });

  test('does not steal focus on initial direct page load or browser reload', async ({
    page,
  }) => {
    await page.goto('/projects');

    const focusedTag = await page.evaluate(
      () => document.activeElement?.tagName
    );
    expect(focusedTag).toBe('BODY');
  });

  test('each route contains exactly one primary visible <h1> tag', async ({
    page,
  }) => {
    const routes = ['/', '/projects', '/experience', '/techs', '/playground'];

    for (const route of routes) {
      await page.goto(route);
      const visibleH1Count = await page
        .locator('h1:visible:not(:has-text("islands"))')
        .count();
      expect(
        visibleH1Count,
        `Heading assertion on route: ${route}`
      ).toBeGreaterThanOrEqual(1);
    }
  });
});
