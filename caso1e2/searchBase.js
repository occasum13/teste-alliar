//setting up webdriver
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build())
const driver =  new webdriver.Builder().forBrowser('chrome').build();

//this constant is setting the css property in which we want to select by fullxpath
const element = "/html/body/div/div[1]/div[2]/div[1]/div/div[1]/div/div/div/div/div/div/div/span/input"


class SearchBase{
    constructor(){
        //This will make driver and element global
        global.driver = driver;
        global.element = element;
    }

    go_to_url(URL){
        //This will go to the designed url
        driver.get(URL);
    }
}

module.exports = SearchBase;