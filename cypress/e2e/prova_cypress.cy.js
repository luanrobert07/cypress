/// <reference = cypress>

describe("Realização do teste no site computer-database", ()=>{
    it("Testando botão Next",()=>{
    
      let infos = acessar_site()
      cy.visit(infos[0])

      cy.get('.next > a').click()
      cy.get('.current > a').should('contain.text', "11 to 20")
    })
    
    it("Testando botão Previous",()=>{
        let infos = acessar_site()
        cy.visit(infos[0])
  
        cy.get('.prev > a').click()
        cy.get('.current > a').should('contain.text', "1 to 10")
    })

    it("Falha ao adicionar um computador sem nome",()=>{
        let infos = acessar_site()
        cy.visit(infos[0])

        cy.get('#add').click()
        cy.get('#introduced').type('2008-11-02')
        cy.get('#discontinued').type('2010-02-03')
        cy.get('.primary').click()

        cy.get('.error').should('contain.text', 'Failed to refine type')
    })
})


function acessar_site(){
    let url = "https://computer-database.gatling.io/computers"
    let infos = [url]

    cy.visit(url)
    return infos
  }