import {browser, element, by} from 'protractor';

export class McDonaldHomePage {
    protected btnJoin = element(by.css('#join-us-header.link.joinpreference'));

    async open(): Promise<void> {
      await browser.get('https://www.mcdonalds.com');
    }

    async btnJoinClick(): Promise<void> {
      await this.btnJoin.click();
    }

    logoMcDonaldLogo() {
      return element(by.css('.nav__logo>a.component-logo.navbar-brand'));
    }

}