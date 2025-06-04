const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  const url = 'file://' + path.join(__dirname, 'index.html');
  await page.goto(url);

  const sections = await page.$$eval('.section', nodes => nodes.map(n => n.id));

  for (let i = 0; i < sections.length; i++) {
    const selector = '#' + sections[i];
    await page.evaluate(sel => document.querySelector(sel).scrollIntoView(), selector);
    await page.waitForTimeout(500);
    await page.screenshot({ path: `frame-${i+1}.png` });
  }

  await browser.close();
})();
