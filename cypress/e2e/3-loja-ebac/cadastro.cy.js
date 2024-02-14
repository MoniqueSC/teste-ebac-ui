///<reference types="cypress"/>

import { faker } from '@faker-js/faker';
var SENHA = 'moni123456';
var EMAIL = faker.internet.email()
var nome = faker.person.firstName()
var sobrenome = faker.person.lastName()
describe('Funcionalidade: Cadastro', () => {
    beforeEach(() => {
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
    })
    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(EMAIL)
        cy.get('#reg_password').type(SENHA)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2) ').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a ').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' ,  'Detalhes da conta modificados com sucesso.')
    })
    })
