const {By, Key} = require('selenium-webdriver')
const SearchBase = require('./searchBase');
let webdriver = require('selenium-webdriver');

class searchEngine extends SearchBase{
    enter_search(searchText){
        //This will search into specified input field
        driver.findElement(By.xpath(element)).sendKeys(searchText);
        //this will click enter in the input field
        driver.findElement(By.xpath(element)).sendKeys(Key.ENTER);
    }

    take_screenshot(filename){
        //This will print the page
        driver.takeScreenshot().then(
            function(image){
                require('fs').writeFileSync(filename, image, 'base64');
            }
        );
    }

    close_window(){
        //This will close the page
        driver.quit()
    }
}
module.exports = new searchEngine();