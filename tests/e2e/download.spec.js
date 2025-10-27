import { test, expect } from '@playwright/test';

test('download CSV functionality', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Wait for dataset to load
  await page.waitForSelector('h2:has-text("Dataset Information")');

  // Click download button
  const downloadPromise = page.waitForEvent('download');
  await page.click('button:has-text("Download CSV")');

  // Verify download
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('words.csv');
});