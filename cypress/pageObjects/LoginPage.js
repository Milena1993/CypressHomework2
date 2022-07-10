class LoginPage {
    getLogin() {
        return cy.get('#user-name')
    }
    getPassword() {
        return cy.get('#password')
    }

    getSubmit() {
        return cy.get('#login-button')
    }
}

export default LoginPage;
