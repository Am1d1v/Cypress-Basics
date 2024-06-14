/// <reference types="Cypress" />

describe('Tasks management', () => {

    it('should open and close the new task model by clicking on "Cancel" button', () => {
        cy.visit('http://localhost:5173/');

        // Check that the "Add Task" button exists
        cy.get('button').contains('Add Task');

        // Open modal by clicking on the "Add Task" button
        cy.contains('Add Task').click();

        // Close modal by clicking on the "Cancel" button
        cy.contains('Cancel').click();

        
    });

    it('should open and close the new task model by clicking on the backdrop', () => {
        cy.visit('http://localhost:5173/');

        // Check that the "Add Task" button exists
        cy.get('button').contains('Add Task');

        // Close modal by clicking on the backdrop
        cy.contains('Add Task').click();
        cy.get('.backdrop').click({force: true});

        // Check that backdrop does not exist after it was clicked
        cy.get('.backdrop').should('not.exist');

        // Check that dialog element does not exist after backdrop was clicked
        cy.get('dialog.modal').should('not.exist');
        
    });

});