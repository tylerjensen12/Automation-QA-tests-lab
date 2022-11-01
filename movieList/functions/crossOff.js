const {By} = require('selenium-webdriver')

const crossOff = async(driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Spiderman')
    await driver.findElement(By.xpath('//button')).click()
    
    await driver.findElement(By.xpath('//span')).click()

    const movie = await driver.findElement(By.xpath('//span[@class="checked"]'))
    
    expect(movie).toBeTruthy()
}

module.exports = {
    crossOff
}