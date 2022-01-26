const timeout = 15000;

// Test des fonctionnalités d'authentification
describe("Auth features", () => {
    let page;

    test('login and logout', async () => {
        await page.goto(process.env.TESTED_WEBSITE);
        await page.waitForSelector('#user-name');
        await page.type('#user-name', process.env.TEST_LOGIN);
        await page.type('#password', process.env.TEST_PASSWORD);
        await page.click('#login-button');

        const titre = await page.$eval(".title",(e)=>e.innerHTML)

        await page.click('#react-burger-menu-btn')
        await page.waitFor(2000)
        await page.click('#logout_sidebar_link')

        await page.screenshot({path: './tests/img/logout_screen.png'});


        // à compléter

    }, timeout);

    // cette fonction est lancée avant chaque test de cette
    // série de tests
    beforeAll(async () => {
        // ouvrir un onglet dans le navigateur
        page = await global.__BROWSER__.newPage()
    }, timeout)

});
