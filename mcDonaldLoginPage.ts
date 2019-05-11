import {element, by} from 'protractor';

export class McDonaldLoginPage {
    emailInput = element(by.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " joinEmailListcontainer ")]//div/*[@id="topnav-email-desktop"]//div/*[@class="form-control topnavemail"]'));
    zipInput = element(by.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " joinEmailListcontainer ")]//div/*[@id="topnav-email-desktop"]//div/*[contains(concat(" ", normalize-space(@class), " "), " topnavzip ")]'));       
    btnSubmit = element(by.xpath('//*[contains(concat(" ", normalize-space(@class), " "), " joinEmailListcontainer ")]//div/*[@id="topnav-email-desktop"]//button[text()="Submit"]'));  
    
    async setEmail(email: string): Promise<void> {
        await this.emailInput.sendKeys(email);
    }

    async setZip(zip: string): Promise<void> {
        await this.zipInput.sendKeys(zip);
    }
     
    // getEmail returns a native Promise<string>
    async getEmail(): Promise<string> {    
        return this.emailInput.getAttribute('value');
    }

    // getZip returns a native Promise<string>
    async getZip(): Promise<string> {    
        return this.zipInput.getAttribute('value');
    }
}