Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Test suite for captcha PoC', {viewportHeight: 947, viewportWidth: 1920}, () => {

    it('Validates that the form throws an error when the captcha is not filled', () => {
        cy.visit('https://demoqa.com/register');
        //Read the fixture file to get the data
        cy.fixture('user.json').as('userInfo');
        cy.get('@userInfo').then((user) => {
            //Filling the form
            cy.get('#firstname').type(user.firstName);
            cy.get('#lastname').type(user.lastName);
            cy.get('#userName').type(user.userName);
            cy.get('#password').type(user.password);
            cy.get('#register').click();
        });
        cy.get('#output').find("div").find("p").should('have.text', 'Please verify reCaptcha to register!');
    });
});