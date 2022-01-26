const timeout = 15000;

// Test des fonctionnalités de gestion du panier
describe("Cart features", () => {
    let page;

    test('add to cart', async () => {
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
        await page.screenshot({path: './tests/img/cart_screen.png'});


    }, timeout);


    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
