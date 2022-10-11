Cypress.on('uncaught:exception',(err, runnable) => {
  return false
})

describe('Visit page tested', () => {
    beforeEach(() => {
      // cy.viewport(1280, 720)
      cy.visit('http://localhost:8081') 
  })

  it('ubication modal is showed', () =>{
    cy.get('[data-test-id="location-test"]').should('have.class', 'location').then((location)=>{
        if(location.is(':visible')){
          cy.get('[data-test-id="location-test"]').contains('Buscando ubicacion...')
          cy.wait(5000)
          cy.get('[data-test-id="location-pais"]').contains('Managua, Nicaragua')
          cy.get('[data-test-id="location-button"]').should('have.class', 'location-footer__close').click()
        }else{
          cy.log('El modal no es visible, por que ya dio la ubicacion')
        }
    })
    cy.contains('Rachael')
  })

  it('main is showed', () => {
    cy.get('[data-test-id="main-title"]').should('contain', 'REGAIN YOUR EMOTIONAL STABILITY').should('be.visible')
    cy.get('[data-test-id="main-test"]').find('img').should('be.visible').should('have.attr','srcset').should('include','main')
  })

  it.only('chatbot its work functional', () => {
    cy.get('[data-test-id="bot-test"]').should('be.visible').click().should('have.css','border-radius')
    cy.wait(2500)
    cy.get('[data-test-id="chatbot-test"]').find('img').should('be.visible')
                                        .should('have.class','imgRedonda')
                                        .should('have.css','border-radius')
    cy.get('[data-test-id="bot-message"]').should('be.visible').should('contain','Hola! Mi nombre es Rachael')
    cy.get('[data-test-id="test-input"]').should('be.visible').type('Hola')
    cy.get('[data-test-id="test-submit"]').should('be.visible').click()
    cy.wait(1000)
    // EN CASO DE QUE EL SERVIDOR NO ESTE EJECUTANDOSE DEBE DE ABRIRSE UN MODAL DE SWEETALERT
    cy.get('.swal2-popup').should('be.visible')
  })
})