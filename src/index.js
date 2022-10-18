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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_extra_1 = __importDefault(require("puppeteer-extra"));
const puppeteer_extra_plugin_stealth_1 = __importDefault(require("puppeteer-extra-plugin-stealth"));
const username = "ufuu11a64138";
const password = "GGTmdf209";
const isHeadless = false;
const usernameInputEl = "#txtUserName";
const passwordInputEl = "#password";
const loginEl = "#btnLogin";
const agreeBtnEl = isHeadless ? "#btnAgree_F" : "#btnAgree";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield puppeteer_extra_1.default
        .use((0, puppeteer_extra_plugin_stealth_1.default)())
        .launch({ headless: isHeadless });
    const page = yield browser.newPage();
    page.on("response", (event) => __awaiter(void 0, void 0, void 0, function* () {
        const [mainUrl, queryString] = event.url().split("?");
        if (mainUrl === "https://ufabet.com/_View/RMOdds1Gen.ashx") {
            console.log("event", event.url());
            try {
                const rawText = yield event.text();
                console.log("rawText", rawText);
            }
            catch (error) {
                // console.log("error", error);
            }
        }
        // console.log("event.json()",  await event?.json());
        // console.log("event.buffer()",  event.buffer());
    }));
    yield page.goto("https://ufabet.com/");
    yield page.waitForSelector(usernameInputEl);
    yield page.focus(usernameInputEl);
    yield page.keyboard.type(username);
    yield page.focus(passwordInputEl);
    yield page.keyboard.type(password);
    yield page.click(loginEl);
    // // agree page
    yield page.waitForSelector(agreeBtnEl);
    yield page.click(agreeBtnEl);
    yield page.waitForTimeout(1000);
    yield page.goto("https://ufabet.com/_View/RMOdds2.aspx?ot=t");
}))();
//# sourceMappingURL=index.js.map