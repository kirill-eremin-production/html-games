import { expect, test } from '@playwright/test';

test('режим галактики запускается через кампанию', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');
  await expect(page.locator('#start-screen')).toBeVisible({ timeout: 10_000 });

  // Клик по кнопке "КАМПАНИЯ"
  await page.locator('#campaign-btn').click();

  // Стартовый экран скрылся
  await expect(page.locator('#start-screen')).toBeHidden();

  // Body получил класс galaxy-mode
  await expect(page.locator('body')).toHaveClass(/galaxy-mode/);

  // Galaxy HUD отображается с игровыми показателями
  await expect(page.locator('#galaxy-hud')).toBeVisible();
  await expect(page.locator('.gal-money')).toBeVisible();
  await expect(page.locator('.gal-fuel')).toBeVisible();
  await expect(page.locator('.gal-range')).toBeVisible();

  // Подсказка управления видна
  await expect(page.locator('#galaxy-hint')).toBeVisible();

  // Ползунок яркости на месте
  await expect(page.locator('#galaxy-brightness')).toBeVisible();

  // Названия звёздных систем отображаются
  await expect(page.locator('#galaxy-labels')).toBeVisible();
  await expect(page.locator('.galaxy-label').first()).toBeVisible();

  // Combat HUD скрыт
  await expect(page.locator('#hud')).toBeHidden();

  // Нет ошибок
  expect(errors).toHaveLength(0);

  await page.screenshot({ path: 'e2e/screenshots/enter-galaxy.png', fullPage: true });
});
