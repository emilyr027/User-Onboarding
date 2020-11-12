describe('User-Onboarding App Test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    it('can input a name', () => {
        cy.get('input[name="name"]')
            .type('Emily Ryan')
            .should('have.value', 'Emily Ryan')
    })

    it('can input an email', () => {
        cy.get('input[name="email"]')
            .type('emilyryancreative@gmail.com')
            .should('have.value', 'emilyryancreative@gmail.com')
    })

    it('can input a password', () => {
        cy.get('input[name="password"]')
            .type('123abcdef')
            .should('have.value', '123abcdef')
    })

    it('can select the terms and conditions checkbox', () => {
        cy.get('input[name="termsOfService"]').click()
            .should('be.checked')
    })

    it('can select a role', () => {
        cy.get('select[name="role"]')
            .select('webDeveloper')
    })

    it('can submit a new user', () => {
        cy.get('button').click()
    })

    it('can check that submit is enabled when all fields are full', () => {
        cy.get('button').should('be.enabled');
        cy.get('input[name="password"]').type(' ')
        cy.get('button').should('be.disabled') 
    })

});
