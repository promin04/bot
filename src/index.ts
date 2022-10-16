const puppeteer = require("puppeteer");

const username = "ufuu11a64138";
const password = "GGTmdf209";

const usernameInputEl = "#txtUserName";
const passwordInputEl = "#password";
const loginEl = "#btnLogin";
const agreeBtnEl = "#btnAgree_F";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  );

  await page.goto("https://ufabet.com/");
  await page.waitForSelector(usernameInputEl);
  await page.focus(usernameInputEl);
  await page.keyboard.type(username, { delay: Math.random() * 1000 });
  await page.focus(passwordInputEl);
  await page.keyboard.type(password, { delay: Math.random() * 1000 });
  await page.click(loginEl);

  // agree page
  await page.waitForSelector(agreeBtnEl);
  await page.click(agreeBtnEl);
})();
