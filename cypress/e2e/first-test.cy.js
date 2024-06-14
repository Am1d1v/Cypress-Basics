describe('template spec', () => {

  it('passes', () => {
    // Visit a page
    cy.visit('http://localhost:5173/');

    // Search for a certain element
    cy.get('li').should('have.length', 6);
  })

})