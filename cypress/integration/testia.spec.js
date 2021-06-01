/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/dashboard')
  })

  it('has header ,footer, canvas and three buttons', () => {
    cy.get('app-header').should('be.visible')
    cy.get('app-footer').should('be.visible')
    cy.get('canvas').should('have.class', 'canvas_size')
    cy.get('button').should('have.length', 3)

  });

  it('click btn Dessiner', () => {
    cy.get('button').eq(1).click().should('have.class', 'active_draw')
    cy.get('button').eq(1).click().should('not.have.class', 'active_draw')
  });

  it('click btn Zoomer', () => {
    cy.get('button').eq(2).click().should('have.text', 'Dézoomer')
    cy.get('button').eq(2).click().should('have.text', 'Zoomer')
  });
});