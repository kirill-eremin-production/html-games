import { expect, test } from '@playwright/test';

test.describe('Space Combat — smoke', () => {
  test('приложение загружается без ошибок в консоли', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');

    // Ждём отрисовки игрового canvas (создаётся Babylon.js)
    const canvas = page.locator('#game-canvas');
    await expect(canvas).toBeAttached({ timeout: 10_000 });

    // Стартовый экран виден
    await expect(page.locator('#start-screen')).toBeVisible();

    // Основные кнопки на месте
    await expect(page.locator('#start-btn')).toBeVisible();
    await expect(page.locator('#campaign-btn')).toBeVisible();
    await expect(page.locator('#settings-btn')).toBeVisible();

    // Нет ошибок в консоли
    expect(errors).toHaveLength(0);

    await page.screenshot({ path: 'e2e/screenshots/smoke.png', fullPage: true });
  });
});
