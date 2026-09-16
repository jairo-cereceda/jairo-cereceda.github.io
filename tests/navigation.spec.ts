import { test, expect } from '@playwright/test';

test.describe('Desktop Navigation', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('loads desktop layout with main window when accessing /projects directly', async ({
    page,
  }) => {
    await page.goto('/projects');

    const window = page.locator('#main-window');
    await expect(window).toBeVisible();
    await expect(window.locator('[data-slider-wrapper]').first()).toBeVisible();
    await expect(page.locator('[data-left-animation]')).toBeVisible();
  });

  test('navigating from index updates window content without a full page reload', async ({
    page,
  }) => {
    await page.goto('/');

    await page.locator('a[href="/projects"]:visible').click();

    await expect(page).toHaveURL('/projects');
    await expect(page.locator('#main-window')).toBeVisible();
  });
});

test.describe('Mobile Navigation', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('navigates to a full-screen view on mobile without desktop sidebars', async ({
    page,
  }) => {
    await page.goto('/');

    await page.locator('a[href="/experience"]:visible').click();

    await expect(page).toHaveURL('/experience');
    await expect(page.locator('[data-left-animation]')).toBeHidden();
  });
});
