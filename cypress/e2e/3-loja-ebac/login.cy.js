///<reference types="cypress"/>

describe('Funcionalidade: Login' , () => {
    it('Deve fazer login com sucesso' , () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('monique.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, monique.teste (não é monique.teste? Sair)')
        cy.get('.page-title').should('contain' , 'Minha conta' )
    })

})