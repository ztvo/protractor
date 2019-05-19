import {McDonaldHomePage} from './mcDonaldPage';
import {McDonaldLoginPage} from './mcDonaldLoginPage';

describe('tests on TS using page objects', () => {
    //const mcDonaldHomepage = new McDonaldHomePage();

    //beforeEach(async () => {        
    //    await mcDonaldHomepage.open();
    //});

    it('logo exists on McDonalds home page',  async () => {
        const mcDonaldHomepage = new McDonaldHomePage();
        await mcDonaldHomepage.open();
        expect(await mcDonaldHomepage.logoMcDonald.isDisplayed()).toBe(true);
    });

    it('registartion with an existed email ', async () => {
        const mcDonaldHomepage = new McDonaldHomePage();
        await mcDonaldHomepage.open();
        await mcDonaldHomepage.btnJoinClick();
        const mcDonaldLoginPage = new McDonaldLoginPage();
        await mcDonaldLoginPage.setEmail('tvo@gmail.com');
        await mcDonaldLoginPage.setZip('12347');
        expect(await mcDonaldLoginPage.getEmail()).toEqual('tvo@gmail.com');
        expect(await mcDonaldLoginPage.getZip()).toEqual('12347');
        await mcDonaldLoginPage.btnSubmitClick();
        expect(await mcDonaldLoginPage.registrationErrorMsg.isDisplayed()).toBe(true);
    });

})