import puppeteer from 'puppeteer'

const getColor = async (streamer) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--incognito'],
    })
    const page = await browser.newPage()

    await page.goto(`https://www.twitch.tv/${streamer}`, {
      waitUntil: 'networkidle2',
    })
    const selector = '.ScAccentRegionCssVars-sc-viq0je-0'
    await page.waitForSelector(selector)

    const colorData = await page.evaluate((selector) => {
      const color = getComputedStyle(
        document.querySelector(selector)
      ).getPropertyValue('--color-accent')

      return color
    }, selector)
    browser.close()
    return colorData
  } catch (error) {
    console.log(error)
  }
}

export default getColor
