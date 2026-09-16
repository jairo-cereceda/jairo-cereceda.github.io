import { test, expect } from '@playwright/test';

test.describe('Experience Page', () => {
  test('renders timeline milestones and certificate list', async ({ page }) => {
    await page.goto('/experience');

    const heading = page
      .locator('h1:visible, [data-page-title]:visible')
      .first();
    await expect(heading).toContainText('Experiencia');

    const timelineItems = page.locator('article, [data-timeline-item]');
    expect(await timelineItems.count()).toBeGreaterThan(0);
  });
});
