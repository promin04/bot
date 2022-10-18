import puppeteer from "puppeteer-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";

const username = "ufuu11a64138";
const password = "GGTmdf209";

const isHeadless = false;

const usernameInputEl = "#txtUserName";
const passwordInputEl = "#password";
const loginEl = "#btnLogin";
const agreeBtnEl = isHeadless ? "#btnAgree_F" : "#btnAgree";

(async () => {
  const browser = await puppeteer
    .use(stealthPlugin())
    .launch({ headless: isHeadless });
  const page = await browser.newPage();

  page.on("response", async (event) => {
    const [mainUrl, queryString] = event.url().split("?");

    if (mainUrl === "https://ufabet.com/_View/RMOdds1Gen.ashx") {
      console.log("event", event.url());
      try {
        const rawText = await event.text();
        console.log("rawText", rawText);
      } catch (error) {
        // console.log("error", error);
      }
    }

    // console.log("event.json()",  await event?.json());
    // console.log("event.buffer()",  event.buffer());
  });
  await page.goto("https://ufabet.com/");
  await page.waitForSelector(usernameInputEl);
  await page.focus(usernameInputEl);
  await page.keyboard.type(username);
  await page.focus(passwordInputEl);
  await page.keyboard.type(password);
  await page.click(loginEl);

  // // agree page
  await page.waitForSelector(agreeBtnEl);
  await page.click(agreeBtnEl);
  await page.waitForTimeout(1000);

  await page.goto("https://ufabet.com/_View/RMOdds2.aspx?ot=t");
})();
