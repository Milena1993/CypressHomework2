/// <reference types="cypress" />
import constants from '../support/Constants'
import LoginPage from '../pageObjects/LoginPage'
import ProductPage from '../pageObjects/ProductPage'
import CardPage from '../pageObjects/CardPage'


describe('Cypress Test Flow', function () {
  let testData;

  before(function () {
    cy.fixture('example').then(function (data) {
      testData = data
      return testData
    })
    cy.visit(constants.baseUrl)
  })

  it('Add and delete items', function () {

    const loginPage = new LoginPage()
    loginPage.getLogin().type(testData.login)
    loginPage.getPassword().type(testData.password)
    loginPage.getSubmit().click()
    cy.url().should('include', constants.pageUrl)
    cy.title().should('eq', constants.pageTitle)

    const productPage = new ProductPage()
    productPage.getPorductList().should('have.length', constants.productListSize)
    productPage.getLogo().should("be.visible")
    productPage.getShoppingCard().should("be.visible")
    cy.selectProduct(testData.productName)

    productPage.getPorductList().then(function (element) {
      const itemText = element.text()
      expect(itemText.includes(testData.productName)).to.be.true
    })
    const cardPage = new CardPage()
    cardPage.getCardBadge().should("be.visible")
    cardPage.getCardBadge().click()
    cardPage.getSelectedProduct().should("be.visible")
    cardPage.getDeleteItem().click()
    cardPage.getItemBlock().should("not.exist")
    cardPage.getCheckout().click()

  })
})

