/// <reference types="cypress" />
import { homePage } from '../pageObjects/HomePage';
import { resultPage } from '../pageObjects/ResultPage';


describe('Cypress Test Flow', () => {

});
before(() => {

  homePage.visitPage()
  homePage.verifyTheHomePage()
});

it('Book a Hotel', function () {

  homePage.searchLocation()
  homePage.selectCheckinDate()
  homePage.selectCheckoutdate()
  homePage.increaseAdultNumber()
  homePage.searchData()
  resultPage.verifyTheLocationName()
  resultPage.filterByStars()
  cy.wait(3000)
  resultPage.verifyTheFourStars()
})

