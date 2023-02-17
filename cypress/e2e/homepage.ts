import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I visit homepage', () => {
  cy.visit('/');
});

Then(`I should see a title {string}`, (titleText: string) => {
  cy.contains('#mPT-title', titleText);
});
