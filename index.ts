import * as pptr from 'puppeteer';

// (async () => {
//     const browser = await pptr.launch({headless: false});
//     // const browser = await pptr.launch();

//     const page = await browser.newPage();

//     await page.goto('https://market.binaryx.pro/#/');
//     await page.waitForSelector('a')
//     let body = await page.content();
//     console.log(body);

//     // await page.goto('https://market.binaryx.pro/getSales?page=1&page_size=5&status=selling&sort=time&direction=desc');

//     // await page.reload();

//     // const res = await page.waitForResponse('https://market.binaryx.pro/getSales?page=1&page_size=5&status=selling&sort=time&direction=desc')
//     // console.log(res.ok());
//     // console.log(res);
//     // console.log(await res.json());

//     // setTimeout(async () => {
//     //     await browser.close();
//     // }, 2000);
//     await browser.close();
// })();

// Sol 1: need "await pptr.launch({headless: false})"
(async () => {
    const browser = await pptr.launch({headless: false});

    const page = await browser.newPage();
    const apiContent = await page.goto('https://market.binaryx.pro/getSales?page=1&page_size=5&status=selling&sort=time&direction=desc');
    console.log(apiContent.ok());
    console.log(await apiContent.text());
    console.log(await apiContent.json());

    await browser.close();
})();