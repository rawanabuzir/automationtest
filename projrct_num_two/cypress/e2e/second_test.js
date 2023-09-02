/// <reference types= "cypress" />

describe('Add to cart then do the checkout process', () => {
    it('if checkout button is working well', () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('#customer_menu_top > li > a').click();
        cy.get('#loginFrm_loginname').type('rawanabuzir');
        cy.get('#loginFrm_password').type('rawan123456789{enter}');
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