describe('Header and Footer elements on QAuto main page', () => {

  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/', { failOnStatusCode: false });
  });

it('Повинен знайти всі кнопки з хедера', () => {
cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/', {
  failOnStatusCode: false
});

  cy.get('.header_inner', { timeout: 15000 }).should('be.visible');

  cy.get('.header_inner').within(() => {
    cy.contains('Home').should('be.visible');
    cy.contains('About').should('be.visible');
    cy.contains('Contacts').should('be.visible');
    cy.contains('Guest log in').should('be.visible');
    cy.contains('Sign In').should('be.visible');
  });
});

it('Повинен знайти всі посилання та кнопки з футера', () => {
  cy.get('#contactsSection', { timeout: 15000 }).should('be.visible');

  cy.get('#contactsSection').within(() => {
    cy.get('a[href*="facebook"]').should('be.visible');
    cy.get('a[href*="ithillel"]').should('be.visible');
    cy.get('a[href*="youtube"]').should('be.visible');
    cy.get('a[href*="instagram"]').should('be.visible');
    cy.get('a[href*="linkedin"]').should('be.visible');

    cy.get('a.contacts_link.display-4')
      .should('be.visible')
      .and('have.attr', 'href', 'https://ithillel.ua');

    cy.get('a.contacts_link.h4')
      .should('be.visible')
      .and('have.attr', 'href')
      .and('include', 'mailto:developer@ithillel.ua');
  });
});

});
