const {By} = require('selenium-webdriver')

const uncross = async(driver) => {
    await driver.findElement(By.xpath('//span')).click()

    const movie = await driver.findElement(By.xpath('//span[@class]'))
    
    expect(movie).toBeTruthy()
}

module.exports = {
    uncross
}