/// <reference types="Cypress" />

Cypress.Commands.add('adicionaItem', () => {
    cy.visit('/')
    
    cy.get('#Bolsas').click()
    cy.contains('Bolsas').click()
    cy.contains('Bolsa Shoestock Baguete Croco Feminina').click()
    cy.get('#buy-button-now').click() 
})