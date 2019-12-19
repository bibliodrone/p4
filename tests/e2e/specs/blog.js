// https://docs.cypress.io/api/introduction/api.html
// e2e test
// Run at console 'npm run test:e2e'

describe('Blog', () => {
  it('Visits the homepage', () => {
    cy.visit('/');
    cy.get('h2').should('have.length', 4);
    cy.contains('h2', 'My first post');
    cy.contains('nav', 'categories');
    cy.contains('nav', 'homepage');
    cy.contains('nav', 'favorites');
    cy.get('h2').first().click();
    // visit first blog page, test if content paragragph is visible.
    cy.get('[data-test="post-content-test"]');

  })

  it('shows categories page', () => {
    cy.visit('/categories');
    cy.contains('h3', 'Categories');
    cy.contains('[data-test="category-tag"]', 'recommendations');
    cy.get('[data-test="category-tag"]').should('have.length', 8);
  })

  it('visits post #4', () => {
    cy.visit('/posts/4');
    cy.contains('h2', 'Astronomy Picture of the Day');
    cy.contains('button', 'Add to Favorites');
    cy.contains('[data-test="home-link"]', 'Return to Home Page');
    cy.contains('[data-test="date-of-post"]','October 10, 2019');
    cy.contains('[data-test="post-content-test"]','If you like great pictures' );
    cy.get('[data-test="added-to-favorites"]').should('not.be.visible');
    cy.get('button#addToFavorites').click();
    cy.get('[data-test="added-to-favorites"]').should('be.visible');
  })
  // Cypress testing doesn't seem to have access to local storage. If I click 'add to favorites' manually in the Cypress window, it does add the post to 'favorites'
  it('visits favorites page', () => {
    cy.visit('/favorites');
    cy.contains('h1', 'Favorites');
    cy.contains('div', 'No favorites, yet');
  })

  let signup = {
    name: 'Brent G. Waldman',
    email: 'my_email@emailserver.uk',
    comment: 'I really love your work. I wish I could be as creative as you!'
  }

  it('visits mailinglist page', () => {
    cy.visit('/mailing-list');
    cy.contains('h2', 'Sign up');
    cy.get('[data-test="submit-name-input"]').type(signup.name);
    cy.get('[data-test="submit-email-input"]').type(signup.email);
    cy.get('[data-test="submit-comments-textarea"]').type(signup.comment);
    cy.get('[data-test="submit-info-button"]').click();
    // cy.get('[data-test="signup-submit"]').should('be.visble');
    cy.contains('div', 'Thanks for signing up!');
  });
  
})
