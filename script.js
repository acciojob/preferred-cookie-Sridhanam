describe('Customizable Font', () => {
  it('should allow users to customize font size and color', () => {
    cy.visit('/main.html'); // Make sure the path is correct for your setup

    // Adjust font size and color
    cy.get('#fontsize').invoke('val', 18).trigger('change');
    cy.get('#fontcolor').invoke('val', '#ff0000').trigger('change');
    
    // Click the Save button using its unique ID
    cy.get('#saveButton').click();
    
    // Check if cookies are set
    cy.getCookie('fontcolor').should('exist');
    cy.getCookie('fontsize').should('exist');
    
    // Reload the page to apply the saved preferences
    cy.reload();
    
    // Check if the CSS has been applied correctly
    cy.get('body').should(($body) => {
  expect($body).to.have.css('font-size', '18px');
  expect($body).to.have.css('color', 'rgb(255, 0, 0)');

});