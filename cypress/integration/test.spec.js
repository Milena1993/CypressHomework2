/// <reference types="cypress" />
import { homePage } from '../pageObjects/HomePage';
import { resultPage } from '../pageObjects/ResultPage';
import constants from '../support/Constants'

describe('Cypress Test Flow', () => {
  
  });
  before(() => {

    homePage.visitPage()
    homePage.verifyTheHomePage()
  });

  it('Book a Trip', function () {
    
    homePage.searchLocation()
    homePage.selectCheckinDate()
    homePage.selectCheckoutdate()
    homePage.increaseAdultNumber()
    homePage.searchData()
    resultPage.verifyTheLocationName()
    resultPage.filterByStars()
    cy.wait(3000)
    resultPage.verifyTheStars()
  })

