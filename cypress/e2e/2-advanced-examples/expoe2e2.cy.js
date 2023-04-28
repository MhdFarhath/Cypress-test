/// <reference types="cypress" />

describe('Expoloader E2E Testing', () => {
  it('visit Signin page', () => {
    cy.visit('https://app.expoloader.com/signin');
      cy.wait(5000);
    // cy.title().should("eq","Expoloader");
    cy.get("#mui-1").type("farhath4741@gmail.com");
    // cy.get("#mui-2").type("Expo@1234");
    // cy.get('.MuiButton-root').click();
    cy.wait(10000);

    cy.get('div')
      .contains('Select Loading Type', {timeout: 30000})
      .click({force: true})
      .then(() => {
        cy.get('div')
          .contains('FLOOR LOADING', {timeout: 30000})
          .click({force: true})
          .then(() => {
            cy.get('div')
              .contains('Select Container', {timeout: 30000})
              .click({force: true})
              .then(() => {
                cy.get(
                  "div[title='20ft Standard Container'] div[class='ant-select-item-option-content']",
                )
                  .click({force: true})
                  .then(() => {
                    cy.get('div')
                      .contains('2D SKU Rotation', {timeout: 30000})
                      .click({force: true})
                      .then(() => {
                        cy.get("div[title='3D SKU Rotation']").click({
                          force: true,
                        });
                      });
                  })
                  .then(() => {
                    cy.get('div')
                      .contains('Select SKU', {timeout: 30000})
                      .click({force: true})
                      .then(() => {
                        cy.get("div[title='SKU_4_315_180_470']")
                          .click({
                            force: true,
                          })
                          .then(() => {
                            cy.wait(10000);
                            cy.get('button').contains('Add').click({
                              force: true,
                            });
                            cy.wait(60000);
                            cy.get('td').contains('1218');

                          });
                      });
                  });
              });
          });
      });

    // cy.get('body > div:nth-child(17) > div > div > div > div.rc-virtual-list > div.rc-virtual-list-holder > div > div > div.ant-select-item.ant-select-item-option.ant-select-item-option-active > div').click();
  });
});
