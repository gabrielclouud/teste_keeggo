/// <reference types="Cypress" />

describe('Busca pelo nome usando API', ()=> {
    it('sucesso', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a',
            failOnStatusCode: false
        }).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)
        })
        
    })
})