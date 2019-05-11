import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
describe('Test on TS', function() {
    beforeEach(() =>{
        browser.get('http://www.angularjs.org');
    })

    it('Enter user name', function() {        
        element(by.model('yourName')).sendKeys('Tatiana');
        let greet = element(by.binding('yourName'));
        let greetExpect = 'Hello Tatiana!';
        expect<any>(greet.getText()).toBe(greetExpect);         
    });

    it('Check todo list', function() {
        let todoList = element.all(by.repeater('todo in todoList.todos'));    
        expect<any>(todoList.count()).toEqual(2);
        expect<any>(todoList.get(1).getText()).toEqual('build an AngularJS app');
    });

    it('Check Develop menu', function() {
        let devMenu = element(by.linkText('DEVELOP'));        
        devMenu.click();        
        let devSubMenu = element(by.linkText('Developer Guide'));   
        devSubMenu.click();
        expect<any>(element(by.id('guide-to-angularjs-documentation')).getText()).toEqual('Guide to AngularJS Documentation');
    });

})