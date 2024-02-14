///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach (() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')


    });
    afterEach (
        () =>{
            cy.screenshot()
        })

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        //.first()
        //.last()
        //.eq(2)
        .contains('Abominable Hoodie')
        .click()
        cy.get('.product_title').should('contain','Abominable Hoodie')
    })
})