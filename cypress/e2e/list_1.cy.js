/// <reference = cypress>

describe("Teste no site saucedemo", ()=>{
    it("Teste com erro de login",()=>{
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("Luan")
      cy.get('[data-test="password"]').type("123456")
      cy.get('[data-test="login-button"]').click()
      cy.get('.error-message-container').should("contain.text", "Epic sadface")
    })

    it("Teste com user errado de login",()=>{
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("Luan")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('.error-message-container').should("contain.text", "Epic sadface")
    })

    
    it("Teste com user certo, mas password errado de login",()=>{
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("123456")
      cy.get('[data-test="login-button"]').click()
      cy.get('.error-message-container').should("contain.text", "Epic sadface")
    })

    
    it("Teste com user e password correto ",()=>{
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="title"]').should("contain.text", "Products")
    })

    it("Teste do botão do carrinho funcional",()=>{
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="title"]').should("contain.text", "Your Cart")
    })

    it("Teste do botão de checkout",()=>{
      cy.visit('https://www.saucedemo.com')
      cy.get('[data-test="username"]').type("standard_user")
      cy.get('[data-test="password"]').type("secret_sauce")
      cy.get('[data-test="login-button"]').click()
      cy.get('[data-test="shopping-cart-link"]').click()
      cy.get('[data-test="title"]').should("contain.text", "Your Cart")
      cy.get('[data-test="checkout"]').click()
      cy.get('[data-test="title"]').should("contain.text", "Checkout:")
    })

    
})