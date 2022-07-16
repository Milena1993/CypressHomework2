import constants from '../support/Constants'

class HomePage {
    getPageTitle() {
        return cy.title();
    }

    getPageLogo() {
        return cy.get('.bui-header__logo');
    }

    getLanguageImage() {
        return cy.get('.bui-avatar__image')
    }

    getSearchField() {
        return cy.get('#ss')
    }

    getSuggestedList() {
        return cy.get('ul.c-autocomplete__list')
    }


    getCheckin() {
        return cy.get('.xp__dates__checkin')
    }

    getdate() {
        return cy.get('.bui-calendar__date > span')
    }

    getCheckout() {
        return cy.get('.xp__dates__checkout')
    }
    getGuestCount() {
        return cy.get('.xp__guests__count')
    }
    getAddAdultNumber() {
        return cy.get('button[aria-label= "Increase number of Adults"]')
    }

    getSearchButton() {
        return cy.get('.sb-searchbox__button')
    }

    visitPage() {
        Cypress.on("uncaught:exception", () => {
            return false;
        })
        cy.visit('/');
    }

    searchLocation() {
        this.getSearchField().type(constants.location)
        cy.wait(2000)
        this.getSuggestedList().each(($el) => {
            const opt = $el.find('li[data-label=' + constants.location + ']')
            cy.wrap($el).click({ force: true });

        })
    }
    selectCheckinDate() {
        this.getCheckin().click()
        this.getdate().each(($el) => {
            var startDate = $el.find('span').text()
            if (startDate == constants.startDate)
                cy.wrap($el).click()

        })
    }
    selectCheckoutdate() {
        this.getCheckout().click()
        this.getdate().each(($el) => {
            var endDate = $el.find('span').text()
            if (endDate == constants.endDate)
                cy.wrap($el).click({ force: true })
        })
    }
    increaseAdultNumber() {
        this.getGuestCount().click()
        this.getAddAdultNumber().click()
    }

    verifyTheHomePage() {
        this.getPageTitle().should("include", constants.pageTitle);
        this.getPageLogo().should("be.visible");
        this.getLanguageImage().should("be.visible")
    }

    searchData() {
        this.getSearchButton().click()
    }
}
export const homePage = new HomePage();
