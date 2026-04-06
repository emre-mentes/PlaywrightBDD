//bu iki satiri her stepdefiniton dosyasinin basina yazmak zorundayiz,
//Bu kodlar bize BDD step yazmak icin gerekli fonksiyonlari kullanima hazir hale getirir
import { createBdd } from "playwright-bdd";
const { Given, When, Then } = createBdd();


import { SauceLoginPage } from "../pages/SauceLoginPage";

let sauceLoginPage: SauceLoginPage;

Given("kullanici login sayfasindadir", async ({ page }) => {
  sauceLoginPage = new SauceLoginPage(page);
  await sauceLoginPage.goto();
});

When("kullanici adi {string} girer", async ({ page }, kullaniciAdi: string) => {
  await sauceLoginPage.fillUsername(kullaniciAdi);
});

When("sifre {string} girer", async ({ page }, sifre: string) => {
  await sauceLoginPage.fillPassword(sifre);
});

When("login butonuna tiklar", async ({ page }) => {
  await sauceLoginPage.clickLogin();
});

Then("urunler sayfasi acilmalidir", async ({ page }) => {
  await sauceLoginPage.verifyProductsPageIsOpened();
});