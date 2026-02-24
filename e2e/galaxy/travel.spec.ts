import { expect, test } from '@playwright/test';

test('перемещение между звёздами в режиме галактики', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('/');
  await expect(page.locator('#start-screen')).toBeVisible({ timeout: 10_000 });

  // Запускаем кампанию
  await page.locator('#campaign-btn').click();
  await expect(page.locator('#galaxy-hud')).toBeVisible({ timeout: 10_000 });

  // Начальное состояние: Солярис, топливо 5/10
  const currentLabel = page.locator('.galaxy-label.current');
  await expect(currentLabel).toBeVisible();
  const startSystemName = await currentLabel.textContent();
  await expect(page.locator('.gal-fuel')).toContainText('5/10');

  // Находим соседнюю звезду (не текущую, не контрактную цель)
  // Перелёт к контрактной цели автоматически запускает бой
  const targetLabel = page.locator('.galaxy-label:not(.current):not(.contract-target)').first();
  await expect(targetLabel).toBeVisible({ timeout: 5_000 });
  const targetName = await targetLabel.textContent();

  // Получаем экранные координаты звезды из inline-стилей лейбла
  // (label.style.left = starScreenX, label.style.top = starScreenY + 18)
  const starCoords = await targetLabel.evaluate((el) => ({
    x: parseFloat(el.style.left),
    y: parseFloat(el.style.top) - 18,
  }));
  await page.mouse.click(starCoords.x, starCoords.y);

  // Info-панель появилась с названием выбранной системы
  const infoPanel = page.locator('#galaxy-info-panel');
  await expect(infoPanel).toBeVisible({ timeout: 5_000 });
  await expect(infoPanel.locator('h3')).toContainText(targetName!.replace(/\s*\u2302$/, ''));

  // Кнопка "ЛЕТЕТЬ" доступна
  const travelBtn = page.locator('#gal-travel-btn');
  await expect(travelBtn).toBeVisible({ timeout: 3_000 });

  // Запоминаем стоимость перелёта из панели
  const fuelLine = infoPanel.locator('.gal-info-line', { hasText: 'Топливо' });
  const fuelText = await fuelLine.textContent();
  const fuelCost = parseInt(fuelText!.match(/(\d+)/)?.[1] ?? '0', 10);
  expect(fuelCost).toBeGreaterThan(0);

  // Летим!
  await travelBtn.click();

  // Info-панель скрывается во время перелёта
  await expect(infoPanel).toBeHidden();

  // Ждём пока текущая система сменится (анимация перелёта ~1.5 сек)
  const newCurrentLabel = page.locator('.galaxy-label.current');
  await expect(newCurrentLabel).not.toHaveText(startSystemName!, { timeout: 10_000 });

  // Топливо уменьшилось
  const fuelAfter = await page.locator('.gal-fuel').textContent();
  const fuelRemaining = parseInt(fuelAfter!.match(/(\d+)/)?.[1] ?? '0', 10);
  expect(fuelRemaining).toBe(5 - fuelCost);

  // Нет ошибок
  expect(errors).toHaveLength(0);

  await page.screenshot({ path: 'e2e/screenshots/galaxy-travel.png', fullPage: true });
});
