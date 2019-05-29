import {McDonaldHomePage} from './mcDonaldPage';
import {McDonaldLoginPage} from './mcDonaldLoginPage';
import {browser, ExpectedConditions} from 'protractor';

describe('tests on TS using page objects', () => {
    const mcDonaldHomepage= new McDonaldHomePage();

    beforeEach(async () => {
        await mcDonaldHomepage.open();                   
    });

    it('logo exists on McDonalds home page',  async () => {
        expect(await mcDonaldHomepage.logoMcDonaldLogo().isDisplayed()).toBe(true);
    });

    it('registartion with an existed email ', async () => {
        await mcDonaldHomepage.btnJoinClick();
        const mcDonaldLoginPage = new McDonaldLoginPage();
        await browser.wait(ExpectedConditions.visibilityOf(mcDonaldLoginPage.emailInput()));
        await mcDonaldLoginPage.emailInput().sendKeys('tvo@gmail.com');
        await browser.wait(ExpectedConditions.visibilityOf(mcDonaldLoginPage.zipInput()));
        await mcDonaldLoginPage.zipInput().sendKeys('12347');
        expect(await mcDonaldLoginPage.emailInput().getAttribute('value')).toEqual('tvo@gmail.com');
        expect(await mcDonaldLoginPage.zipInput().getAttribute('value')).toEqual('12347');
        await mcDonaldLoginPage.btnSubmit().click();
        await browser.wait(ExpectedConditions.visibilityOf(mcDonaldLoginPage.registrationErrorMsg()));
        expect(await mcDonaldLoginPage.registrationErrorMsg().isDisplayed()).toBe(true);
    });

})