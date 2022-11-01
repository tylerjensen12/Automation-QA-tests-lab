const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {crossOff} = require('../functions/crossOff')
const {uncross} = require ('../functions/uncross')
const {deleteMovie} = require ('../functions/deleteMovie')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('cross off a movie', async () => {
    await crossOff(driver)
    await driver.sleep(1000)
})

test('uncross a movie', async () => {
    await uncross(driver)
    await driver.sleep(1000)
})

test('delete a movie', async () => {
    await deleteMovie(driver)
    await driver.sleep(1000)
})