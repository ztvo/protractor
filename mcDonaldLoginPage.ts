import {element, by} from 'protractor';

export class McDonaldLoginPage {
    emailInput = element(by.css('#joinus_email'));    
    zipInput = element(by.css('#zipcode'));    
    btnSubmit = element(by.css('#submit_form1'));    
    registrationErrorMsg = element(by.css('#topnavemailerr_joinus'));    

    async btnSubmitClick(): Promise<void> {
        return this.btnSubmit.click();
    }

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