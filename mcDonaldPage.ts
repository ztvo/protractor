import {browser, element, by} from 'protractor';
export class McDonaldHomePage {
    btnJoin = element(by.linkText('Join'));    
    logoMcDonald = element(by.className('component-logo'));
    async get(): Promise<void> {
      await browser.get('https://www.mcdonalds.com');
    }
}