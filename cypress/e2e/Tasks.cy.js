/// <reference types="Cypress" />

describe('Tasks management', () => {

    it('should open and close the new task model', () => {
        cy.visit('http://localhost:5173/');

        // Check that the "Add Task" button exists
        cy.get('button').contains('Add Task');

        // Click on the "Add Task" button
        cy.contains('Add Task').click();
        
    });

});