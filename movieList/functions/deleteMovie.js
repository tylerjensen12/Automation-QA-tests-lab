const {By} = require('selenium-webdriver')

const deleteMovie = async(driver) => {
    await driver.findElement(By.xpath('//li/button')).click()

    const movie = await driver.findElement(By.xpath('//ul'))
    
    expect(movie).toBeTruthy()
}

module.exports = {
    deleteMovie
}