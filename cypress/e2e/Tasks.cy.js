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

        // Check that backdrop does not exist after "Cancel" button was clicked
        cy.get('.backdrop').should('not.exist');

        // Check that dialog element does not exist after "Cancel" button was clicked
        cy.get('dialog.modal').should('not.exist');
        
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

    it('should create a new task', () => {
        cy.visit('http://localhost:5173/');

        // Open modal window
        cy.contains('Add Task').click();

        // Select title input and then type data into it
        cy.get('#title').type('Title 1');

        // Select summary input and then type data into it
        cy.get('#summary').type('Some description information');

        // Submit task by clicking on "Add Task" button
        //cy.contains('Add Task').click();
        cy.get('dialog.modal').contains('Add Task').click();
        //cy.get('dialog.modal form p.actions button:submit').click();

        // Check that element with class "task-list" was created
        cy.get('ul.task-list'); 

        // Check task-list contains li with class "task"
        cy.get('ul.task-list li.task'); 

        // Check task has default priority
        cy.get('ul.task-list li.task').contains('🔵'); 

        // Check that task title is not empty
        cy.get('ul.task-list li.task div h2').should('have.length.above', 0);

        // Check that task summary(description) is not empty
        cy.get('ul.task-list li.task div p').should('have.length.above', 0);

    });

    it("should display error message that some task's input fields is empty", () => {
        cy.visit('http://localhost:5173/');

        // Open modal window
        cy.contains('Add Task').click();

        // Submit task by clicking on "Add Task" button
        cy.get('dialog.modal').contains('Add Task').click();

        // Check that warning message appears if title/summary input fields are empty
        cy.get("dialog.modal p.error-message").contains('Please provide values for task title, summary and category!');
    });

    it('should filter tasks', () => {
        cy.visit('http://localhost:5173/');

        // Open modal window
        cy.contains('Add Task').click();

        // Select title input and then type data into it
        cy.get('#title').type('Title with urgent priority');

        // Select summary input and then type data into it
        cy.get('#summary').type('Description of urgent information');

        // Click on category and select "urgent" priority
        cy.get('select#category').select('urgent');

        // Submit task by clicking on "Add Task" button
        cy.get('dialog.modal').contains('Add Task').click();

        // Select all in category filter
        cy.get('select#filter').select('all');

        // Check that at least 1 task exists
        cy.get('.task').should('have.length.above', 0);

        // Select urgent in category filter
        cy.get('select#filter').select('urgent');

        // Check that created earlier task exists
        cy.get('.task').should('have.length.above', 0);

        // Select low in category filter
        cy.get('select#filter').select('low');

        // Check that the task with urgent priority doesn't appears in others filter categories but 'All'
        cy.get('.task').should('have.length', 0); 
    });

    it.only('should add multiple tasks', () => {
        cy.visit('http://localhost:5173/');

        // Creating 1st task
        // Open modal window
        cy.contains('Add Task').click();

        // Select title input and then type data into it
        cy.get('#title').type('Title 1');

        // Select summary input and then type data into it
        cy.get('#summary').type('Description 1');

        // Submit task by clicking on "Add Task" button
        cy.get('dialog.modal').contains('Add Task').click();

        // Check that element with class "task-list" was created
        cy.get('ul.task-list'); 

        // Check that the task list contains 1 element
        cy.get('.task').should('have.length', 1);

        // Check that it is the first created task
        cy.get('.task').eq(0)


        // Creating 2nd task
        // Open modal window
        cy.contains('Add Task').click();

        // Select title input and then type data into it
        cy.get('#title').type('Title 2');

        // Select summary input and then type data into it
        cy.get('#summary').type('Description 2');

        // Submit task by clicking on "Add Task" button
        cy.get('dialog.modal').contains('Add Task').click();

        // Check that the task list contains 2 element2
        cy.get('.task').should('have.length', 2);

        // Check that the 2nd task goes only after 1st
        cy.get('.task').eq(1)


        // Creating 3rd task
        // Open modal window
        cy.contains('Add Task').click();

        // Select title input and then type data into it
        cy.get('#title').type('Title 3');

        // Select summary input and then type data into it
        cy.get('#summary').type('Description 3');

        // Submit task by clicking on "Add Task" button
        cy.get('dialog.modal').contains('Add Task').click();

        // Check that the task list contains 3 element
        cy.get('.task').should('have.length', 3);

        // Check that the 3rd task goes only after 2nd
        cy.get('.task').eq(2)

    });

});