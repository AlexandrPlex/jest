import faker from 'faker';
import puppeteer from 'puppeteer';

describe('H1 Text', () => {
  test('h1 loads correctly', async () => {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: '',
    });

    await page.goto('http://localhost:3003/');
    await page.waitForSelector('#root');
    for (let i = 0; i < 10; i++) {
      const value1 = faker.random.number();
      const value2 = faker.random.number();
      await page.evaluate(() => {
        document.querySelector('input[name=value1').value = '';
        document.querySelector('input[name=value2').value = '';
      });

      await page.click('input[name=value1]');
      await page.type('input[name=value1]', String(value1) );
      await page.click('input[name=value2]');
      await page.type('input[name=value2]', String(value2) );
      await page.click('input[type=submit]');
      const nameElement = await page.$eval('#answer', (el: any) => {
        return Number(el.innerHTML);
      });
      expect(nameElement).toBe(value2 + value1);
    }
    browser.close();
  }, 16000);
});
