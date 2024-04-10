///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach (() => {
       produtosPage.visitarUrl()


    });
    afterEach (
        () =>{
            cy.screenshot()
        })

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain','Descrição')
    })
    it('Deve selecionar um produto da lista',() => {

    });

    it('Deve buscar um produto com sucesso',() => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })
    it('Deve visitar a página do produto', () =>{
        produtosPage.visitarProduto('Aero-Daily-Fitness-Tee')
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
    })
    it('Deve adicionar produto ao carrinho',()=>{
        let qtd = 5
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('M', 'Yellow', qtd)
        cy.get('.woocommerce-message').should('contain' , qtd + ' × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')
       
        
    })
    it('Deve adicionar produto ao carrinho buscando da massa de dados',()=>{
        
        cy.fixture('produtos').then(dados => {
            
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor,
                 dados[0].quantidade)
                 
            
                 cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
        
        
       
        
    })
})