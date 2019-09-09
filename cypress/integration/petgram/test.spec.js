describe('Tests Petgram', ()=>{
    it('La app funciona', ()=>{
        cy.visit('/')
    })
    it('Visitamos una categoría y vemos fotos', ()=>{
        cy.visit('/pet/1')
        cy.get('article')
    })
    it('Podemos volver al home page', ()=>{
        cy.visit('/pet/1')
        cy.get('nav a').first().click()
        cy.url().should('include', '/')
    })
    it('Clickear en el boton de like sin estar loggeado envía al usuario al formulario de registro', ()=>{
        cy.get('article button').first().click()
        cy.get('form').should('have.length', 2)
    })
})