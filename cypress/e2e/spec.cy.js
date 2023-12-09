describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains("Kitchen Sink")
    cy.contains("type").click()
    cy.url().should("include","/commands/actions")
cy.get(".action-email").type("mohamedsaidscience@gmail.com")
cy.get(".action-email").should('have.value',"mohamedsaidscience@gmail.com")
  })
})