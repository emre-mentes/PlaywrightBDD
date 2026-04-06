import {createBdd} from "playwright-bdd";
import{OrangeHrmLoginPage} from "../pages/OrangeHrmLoginPage"

const {Given,When,Then} = createBdd();


let orangeHrmLoginPage : OrangeHrmLoginPage;

Given('kullanici login sayfasina gider', async ({page}) => {

  orangeHrmLoginPage = new OrangeHrmLoginPage(page)
    await orangeHrmLoginPage.goto()
    // From: e2e\features\us002-orange-hrm-login.feature:6:5
});

When('gecerli kullanici adi ve sifre girer', async ({}) => {

  await orangeHrmLoginPage.login("Admin", "admin123")
  // From: e2e\features\us002-orange-hrm-login.feature:7:5
});

When('logine tiklar', async ({}) => {
  await orangeHrmLoginPage.clickLogin();
  // Step: And logine tiklar
  // From: e2e\features\us002-orange-hrm-login.feature:8:5
});

Then('basarili bir sekilde login oldugunu dogrular', async ({}) => {
  await orangeHrmLoginPage.verifySuccessfulLogin();
  // Step: Then basarili bir sekilde login oldugunu dogrular
  // From: e2e\features\us002-orange-hrm-login.feature:9:5
});