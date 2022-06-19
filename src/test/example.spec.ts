import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright");
});

test('log "something"', () => {
  // eslint-disable-next-line
  console.log("something"); // this is better to show call stack
  // TODO: override logger.info with console.log
});
