import * as pptr from 'puppeteer';

(async () => {
    // const browser = await pptr.launch({headless: false});
    const browser = await pptr.launch();

    const page = await browser.newPage();

    page.on('response', async response => {
        if(response.url().includes('getSales?page=1&page_size=5&status=selling&sort=time&direction=desc')){
            // console.log(response.request());
            console.log(await response.text());
        }
    })

    await page.setExtraHTTPHeaders({
        'sec-ch-ua': '"Chromium";v="93", " Not;A Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.0 Safari/537.36'
    })
    await page.goto('https://market.binaryx.pro/getSales?page=1&page_size=5&status=selling&sort=time&direction=desc', {
        waitUntil: "networkidle0"
    });

    // await page.waitForTimeout(1000);
    // await browser.waitForTarget(x => x.url() === 'https://market.binaryx.pro/getSales?page=1&page_size=5&status=selling&sort=time&direction=desc')
    
    // await page.waitForResponse(res => res.ok());

    await browser.close();
})();

// Sol 1: need "await pptr.launch({headless: false})"
// (async () => {
//     const browser = await pptr.launch({headless: false});

//     const page = await browser.newPage();
//     const apiContent = await page.goto('https://market.binaryx.pro/getSales?page=1&page_size=5&status=selling&sort=time&direction=desc');
//     console.log(apiContent.ok());
//     console.log(await apiContent.text());
//     console.log(await apiContent.json());

//     await browser.close();
// })();