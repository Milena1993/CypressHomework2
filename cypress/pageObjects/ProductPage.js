class ProductPage {
    getPorductList() {
        return cy.get('.inventory_item_name')
    }
    getLogo() {
        return cy.get('.app_logo')
    }

    getShoppingCard() {
        return cy.get('.shopping_cart_link')
    }

    getSelectItem() {
        return cy.get('.inventory_item')
    }

    getItemName() {

        return cy.get('.inventory_item_name')
    }

}
export default ProductPage;
