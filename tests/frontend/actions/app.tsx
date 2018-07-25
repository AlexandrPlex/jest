import faker from 'faker';
import puppeteer from 'puppeteer';

let browser: any;
let page: any;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false,
  });
  page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 500,
      height: 2400,
    },
    userAgent: '',
  });
  await page.goto('http://localhost:3003/');
  await page.waitForSelector('#root');
}, 16000);
afterAll(() => {
  browser.close();
});

describe('test calc', () => {
  for (let i = 0; i < 10; i++) {
    it(`test ${i}`, async () => {
      await page.$eval('input[name=value1]', (el: any) => {
        return el.value = '';
      });
      await page.$eval('input[name=value2]', (el: any) => {
        return el.value = '';
      });
      const value1 = faker.random.number();
      const value2 = faker.random.number();
      await page.click('input[name=value1]');
      await page.type('input[name=value1]', String(value1) );
      await page.click('input[name=value2]');
      await page.type('input[name=value2]', String(value2) );
      await page.click('input[type=submit]');
      const nameElement = await page.$eval('#answer', (el: any) => {
        return Number(el.innerHTML);
      });
      expect(nameElement).toBe(value2 + value1);
    });
  }
});
