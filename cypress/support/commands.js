import ProductPage from '../pageObjects/ProductPage'
const productPage = new ProductPage()


Cypress.Commands.add('selectProduct', (productName) => {
    productPage.getSelectItem().each(($el, index, $list) => {
        const text = $el.find('.inventory_item_name').text()
        if (text.includes(productName))
            cy.wrap($el.find('button')).click()
    })
})


