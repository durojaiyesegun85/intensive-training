describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="http://elementalselenium.com/"]')
    .should('be.visible').invoke('removeAttr', 'target').click()
    cy.get('#email').should('be.visible').type('handsomezy@gmail.com')
    cy.get('select').select('JavaScript')
  })
})