import {browser, element, by} from 'protractor';
export class McDonaldHomePage {
    protected btnJoin = element(by.css('#join-us-header.link.joinpreference'));    
    logoMcDonald = element(by.css('.desktop-nav>a.component-logo'));    

    async open(): Promise<void> {
      await browser.get('https://www.mcdonalds.com');
    }

    async btnJoinClick(): Promise<void> {
      await this.btnJoin.click();
    }

}