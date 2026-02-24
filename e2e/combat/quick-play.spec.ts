import { expect, test } from '@playwright/test';

test('быстрый бой запускается по клику "В БОЙ"', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');
  await expect(page.locator('#start-screen')).toBeVisible({ timeout: 10_000 });

  // Клик по кнопке "В БОЙ"
  await page.locator('#start-btn').click();

  // Стартовый экран скрылся
  await expect(page.locator('#start-screen')).toBeHidden();
  await expect(page.locator('#game-over')).toBeHidden();
  await expect(page.locator('#victory-screen')).toBeHidden();

  // HUD появился
  await expect(page.locator('#hud')).toBeVisible();
  await expect(page.locator('#stats')).toBeVisible();
  await expect(page.locator('#crosshair')).toBeVisible();
  await expect(page.locator('#speed-indicator')).toBeVisible();
  await expect(page.locator('#minimap')).toBeVisible();

  // Счёт, жизни и здоровье отображаются
  await expect(page.locator('#score')).toBeVisible();
  await expect(page.locator('#lives')).toBeVisible();
  await expect(page.locator('#health-bar')).toBeVisible();

  // Сообщение "В БОЙ!" появляется
  await expect(page.locator('#message')).toContainText('В БОЙ!');

  // Нет ошибок
  expect(errors).toHaveLength(0);

  await page.screenshot({ path: 'e2e/screenshots/quick-play.png', fullPage: true });
});
