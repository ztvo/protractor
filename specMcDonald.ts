import {McDonaldHomePage} from './mcDonaldPage';
import {McDonaldLoginPage} from './mcDonaldLoginPage';
import {browser, ExpectedConditions} from 'protractor';

describe('Tests on TS using page objects of netflix', () => {    

    it('Netflix home page',  async () => {       
        const mcDonaldHomepage = new McDonaldHomePage();
        await mcDonaldHomepage.get();                      
        expect(await mcDonaldHomepage.logoMcDonald.isPresent()).toBe(true);
    });

    it('Netflix login page', async () =>  {                
        const mcDonaldHomepage = new McDonaldHomePage();
        await mcDonaldHomepage.get();   
        await mcDonaldHomepage.btnJoin.click();     
        const mcDonaldLoginPage = new McDonaldLoginPage();
        
        await mcDonaldLoginPage.setEmail('tvo@gmail.com');
        await mcDonaldLoginPage.setZip('12345');               
        expect(await mcDonaldLoginPage.getEmail()).toEqual('tvo@gmail.com');  
        expect(await mcDonaldLoginPage.getZip()).toEqual('12345');  
        await browser.wait(ExpectedConditions.elementToBeClickable(mcDonaldLoginPage.btnSubmit), 5000);        
        await mcDonaldLoginPage.btnSubmit.click(); 
    });

})