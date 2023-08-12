import { test, expect } from '@playwright/test';

function parseCount(t: string | null) {
  if (t === null) throw new Error('invalid count string');

  return parseInt(t.split(' ').at(-1)!, 10);
}

test('test button is working', async ({ page }) => {
  await page.goto('http://localhost:5100/');
  const countButton = page.getByRole('button', { name: /count/ });
  const preCount = parseCount(await countButton.textContent());

  await countButton.click();
  const postCount = parseCount(await countButton.textContent());

  await expect(postCount).toEqual(preCount + 1);
});
