/// <reference types="cypress" />

describe('Full scenario: Register, Login, View Projects', () => {
  const baseUrl = 'http://localhost:4200';

  const user = {
    email: 'testuser@example.com',
    password: 'password123',
  };

  it('should register a new user', () => {
    cy.visit(`${baseUrl}/register`);

    cy.get('input[formControlName="email"]').type(user.email);
    cy.get('input[formControlName="password"]').type(user.password);

    cy.get('form').submit();

    // Проверяем, что редирект на login
    cy.url().should('include', '/login');
    cy.contains('Registration successful!');
  });

  it('should login with registered user', () => {
    cy.visit(`${baseUrl}/login`);

    cy.get('input[formControlName="email"]').type(user.email);
    cy.get('input[formControlName="password"]').type(user.password);

    cy.get('form').submit();

    // Проверяем, что редирект на главную страницу
    cy.url().should('eq', `${baseUrl}/`);
  });

  it('should display projects after login', () => {
    cy.visit(baseUrl);

    // Проверяем, что карточки проектов отображаются
    cy.get('app-item-card').should('have.length.greaterThan', 0);

    // Проверяем, что конкретный проект есть
    cy.get('app-item-card').first().contains('Landing Page');
  });

  it('should allow selecting a project', () => {
    cy.get('app-item-card').first().click();

    // Можно проверить, что произошёл редирект или эмит события
    // Например, если есть routerLink к деталям проекта:
    // cy.url().should('include', '/projects/1');
  });
});
