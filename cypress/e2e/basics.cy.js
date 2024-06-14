/// <reference types="Cypress" />


describe('Tasks page', () => {

  it('should render the main image', () => {
    // Visit a certain page
    cy.visit('http://localhost:5173/');

    // Get the image inside main-header
    //cy.get('.main-header img');

    // Find the image inside main-header
    cy.get('.main-header').find('img');
  });

  it('should display the page title', () => {
    cy.visit('http://localhost:5173/');
    cy.get('h1').should('have.length', 1);
    cy.get('h1').contains('React Tasks');
    //cy.contains('React Tasks');
  });

});