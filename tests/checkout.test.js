const timeout = 15000;

// Test des fonctionnalités de prise de commande
describe("Checkout process", () => {
    let page;

    test('checkout', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button');

        await page.click('#add-to-cart-sauce-labs-backpack')
        await page.click('.shopping_cart_link')

        const titre = await page.$eval(".inventory_item_name",(e)=>e.innerHTML);
        console.log(titre);
        expect(titre).toContain('Sauce Labs Backpack');

        await page.click('#checkout')
        const titre2 = await page.$eval(".title",(e)=>e.innerHTML);
        expect(titre2).toContain('Checkout: Your Information');
        await page.type('#first-name', process.env.TEST_FIRST_NAME);
        await page.type('#last-name', process.env.TEST_LAST_NAME);
        await page.type('#postal-code', process.env.TEST_ZIP);
        await page.click('#continue')

        const result = await page.$eval('.inventory_item_name',(e)=>e.innerHTML);
        expect(result).toContain("Sauce Labs Backpack")
        await page.screenshot({path: './tests/img/checkout_screen.png'});

    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
