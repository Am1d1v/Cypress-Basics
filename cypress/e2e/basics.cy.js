/// <reference types="Cypress" />


describe('Tasks page', () => {

  it('should render the main image', () => {
    // Visit a certain page
    cy.visit('http://localhost:5173/');

    // Get the image inside main-header
    cy.get('.main-header img');
  });

});