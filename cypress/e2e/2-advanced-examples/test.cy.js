context('test',() =>{

   it ('Should login with correct Credential',()=>{

    cy.visit('https://app.expoloader.com/signin');
   //  cy.get('[data-aut-id="btnLogin"]').click()
       cy.wait(10000); // Wait for 5 seconds
       // cy.get("#mui-1").type("farhath4741@gmail.com");
       // cy.get("#mui-2").type("Farhath43100074@");
       // cy.get('.MuiButton-root').click();


    cy.get('div')
    .contains('Select Loading Type')
    .click({force: true} )
    .then (() => {

      cy.get('div')
      .contains('FLOOR LOADING', {timeout:1000})
      .click({force: true})
      .then( () => {

          cy.get('div')
              .contains('Select Container', {timeout: 1000})
              .click({force: true})
              .then(() => {

                  // cy.get(
                  //    "div[title='20ft Standard Container'] div[class='ant-select-item-option-content']",
                  //  )
                  //    .click({force: true})
                  //    .then(() => {
                  cy.get('div')
                      .contains('20ft Standard Container', {timeout: 10000})
                      .click({force: true})
                      .then(() => {

                          cy.contains('2D SKU Rotation', {timeout: 1000}).click({force: true})
                          cy.contains('3D SKU Rotation').click({force: true})
                          // cy.get('#rc_select_31').click()

                          // cy.get('div')
                          //     .contains('Select SKU', {timeout: 3000})
                          //     .click({force: true})
                          //     .then(() => {
                          //         cy.get("div[title='SKU_4_315_180_470']")
                          //             .click({
                          //                 force: true,
                          //             })
                                  cy.get(
                                      "div[title='20ft Standard Container'] div[class='ant-select-item-option-content']",
                                  )
                                      .click({force: true})

                                      //   cy.get('div')
                                      //   .contains('3D SKU Rotation', {timeout: 4000})
                                      //   .click({force:true})

                                      .then(() => {
                                          cy.get(".ant-select-selection-item").click({ multiple: true, force: true });

                                          cy.get('.ant-col > .ant-select > .ant-select-selector').click()
                                              .should('be.visible')
                                          // cy.get('.ant-col > .ant-select > .ant-select-selector').click(); // Click to open the dropdown
                                          cy.contains('.ant-select-item', 'SKU_1_315_220_345').click(); // Click on the desired option

                                          cy.get('.ant-form-item-control-input-content > .ant-btn').click();
                                          cy.wait(30000);
                                          // cy.get('div.ant-col > .ant-select > .ant-select-selector').contains( 'SKU_1_315_220_345').click();

                                          // cy.get('.ant-row-middle > .ant-col > .ant-row > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
                                          // cy.get('#rc_select_6').contains('SKU_1_315_220_345').click()

                                          cy.get('.MuiIconButton-edgeStart').click();
                                          cy.get('[href="/expoloader/optimizationpage"]').click({force:true});
                                          cy.get('[href="/expoloader/skupage"]').click({force:true});
                                          cy.get('.ant-row-space-around > :nth-child(1) > .ant-btn').click({force:true});
                                          // cy.get('#Sku_name').contains("NAME").type("SKU_9_356_305_381");
                                          cy.get('.ant-upload > .ant-btn').click({force:true})
                                          // cy.get(':nth-child(3) > .ant-btn').click({force:true});
                                          .then( () => {
                                              cy.get('.ant-row-space-around > :nth-child(1) > .ant-btn').click({force : true});
                                              cy.get('#Sku_name').type("SKU_9_356_305_381")
                                              cy.get('#Sku_width').type("350")
                                              cy.get('#Sku_length').type("380")
                                              cy.get('#Sku_height').type("300")
                                              cy.get('#Sku_weight').type("200")
                                              cy.get('#Sku_sap_id').type("CCX60075")
                                              cy.get('#Sku_max_level').type("100")
                                              cy.get('.ant-form-item-control-input-content > .ant-btn').click({force:true})
                                                  .then (() =>{
                                                      cy.get('[data-row-key="8"] > :nth-child(8) > .ant-btn').click({force:true})
                                                      cy.get('#Sku_max_level').type("100" ,{force:true}).click({force:true})
                                                          .then( () =>{

                                                      cy.get('[data-row-key="9"] > :nth-child(9) > .ant-btn').click({force:true})
                                                      cy.get('.ant-popover-buttons > .ant-btn-primary').click({force:true})
                                                              // cy.wait(3000)


                                                  })
                                                  })




                                          })
                                      })

                              })

                      })

      })
      // cy.get('div')
      // .contains('Select Loading Type', {timeout: 30000})
      // .click({force: true})
      // .then(() => {

    })
   }) 
}) 