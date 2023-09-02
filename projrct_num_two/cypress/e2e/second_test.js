/// <reference types= "cypress" />

Cypress.Commands.add("login", (user, password) => {

    cy.get('#customer_menu_top > li > a').click(); //click on regester button
    cy.get('#loginFrm_loginname').type(user); // type the email or the user name
    cy.get('#loginFrm_password').type(password); // type the password
})
describe('Add four items to cart then do the checkout ', () => {
    it('if checkout button is working correctlly', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.login('rawan', 'rawan123456789')

        cy.get(':nth-child(1) > .active').click();
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click();
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(2) > .thumbnail > .pricetag > .productcart > .fa').click();
        cy.get('#block_frame_latest_1770 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click();
        cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click();
        cy.get('#cart_checkout1').click();
        cy.get('#checkout_btn').click();
        cy.get('.maintext').should('include.text', 'Your Order done sussefsfully!');

    })
})
