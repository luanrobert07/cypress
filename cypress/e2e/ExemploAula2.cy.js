/// <reference = cypress>

describe("Teste da criação de registro e login", ()=>{
  it.skip("Teste da criação de usuário com sucesso",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Luan")
    cy.get('#Text1').type("Luan")
    cy.get('#username').type("Luan")
    cy.get('#password').type("Luan")
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain text", "Registration successful")
  })


  it.skip("Teste da criação de usuário com sucesso",()=>{
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type("Luan")
    cy.get('#Text1').type("Luan")
    cy.get('#username').type("Luan")
    cy.get('.btn-primary').should("be.disabled")
  })

  it.skip("Teste de login com sucesso", () =>{
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", infos[0])
  })

  it("Teste de login com erro pós deletar o usuário", () =>{
    let infos = criarUser()
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('h1.ng-binding').should("contain.text", infos[0])
    cy.get('.ng-binding > a').click()
    cy.get('div.ng-scope > :nth-child(5)').should("contain.text", "")
    cy.get('.btn').click()
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[1])
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should('contain.text', "Username or password is incorrect")
  })




})


function criarUser(){
  let hora = new Date().getHours().toString()
  let minuto = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let ID = hora + minuto + segundos + "ID"
  let Senha = hora + minuto + segundos + "Senha"
  let infos = [ID, Senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(ID)
  cy.get('#Text1').type(ID)
  cy.get('#username').type(ID)
  cy.get('#password').type(Senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should("contain.text", "Registration successful")

  return infos
}
