class CardPage {
    getCardBadge() {
        return cy.get('.shopping_cart_badge')
    }
    getSelectedProduct() {
        return cy.get('.inventory_item_name')
    }

    getDeleteItem() {
        return cy.contains("Remove")

    }

    getItemBlock() {
        return cy.get('.cart_item')
    }

    getCheckout() {
        return cy.get('#checkout')
    }


}
export default CardPage;
