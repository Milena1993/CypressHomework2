import constants from '../support/Constants'

class ResultPage {
    getResultTitle() {
        return cy.get('.e1f827110f')
    }

    getResultItems() {
        return cy.get('[data-testid="address"]');
    }

    getStarBox() {
        return cy.get('.f7d4209a37 > [data-filters-group="class"] > div')
    }

    getStarOptions() {
        return ('input[value="class=4"]')
    }

    getFourStarList() {
        return cy.get('[data-testid="rating-squares"]')
    }

    getFourStarItems() {
        return cy.get('[class="b6dc9a9e69 adc357e4f1 fe621d6382"]')
    }



    filterByStars() {
        this.getStarBox().find('input[value="class=' + constants.numberOfStars + '"]').check()

    }
    verifyTheLocationName() {
        this.getResultItems().each($el => {
            let txt = $el.text()
            expect(txt).to.be.equal(constants.location)
            cy.log(txt)

        })
    }

    verifyTheFourStars() {

        this.getFourStarList().each($el => {
            let stars = $el.find('[class="b6dc9a9e69 adc357e4f1 fe621d6382"]')
            expect(stars).to.have.lengthOf(constants.numberOfStars)
        })

    }

}
export const resultPage = new ResultPage();

