import {WebElementPromise, element, by} from 'protractor';


export class McDonaldLoginPage {

    emailInput() {
        return element(by.css('#joinus_email'));    
    }
    
    zipInput() {
        return element(by.css('#zipcode'));    
    }

    btnSubmit() {
        return element(by.css('#submit_form1'));
    }
    
    registrationErrorMsg() {
        return element(by.css('#topnavemailerr_joinus>.topnaverr.topnavjoinerr'));    
    }
}