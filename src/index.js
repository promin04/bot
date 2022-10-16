"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const puppeteer = require("puppeteer");
const username = "ufuu11a64138";
const password = "GGTmdf209";
const usernameInputEl = "#txtUserName";
const passwordInputEl = "#password";
const loginEl = "#btnLogin";
const agreeBtnEl = "#btnAgree_F";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer.launch({ headless: false });
    const page = yield browser.newPage();
    yield page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36");
    yield page.goto("https://ufabet.com/");
    yield page.waitForSelector(usernameInputEl);
    yield page.focus(usernameInputEl);
    yield page.keyboard.type(username, { delay: Math.random() * 1000 });
    yield page.focus(passwordInputEl);
    yield page.keyboard.type(password, { delay: Math.random() * 1000 });
    yield page.click(loginEl);
    // agree page
    yield page.waitForSelector(agreeBtnEl);
    yield page.click(agreeBtnEl);
}))();
//# sourceMappingURL=index.js.map