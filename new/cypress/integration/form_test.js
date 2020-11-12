describe('User-Onboarding App Test', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    })

    const userName = () => cy.get('input[name="first_name"]');
    const password = () => cy.get('input[name="password"]');
    const email = () => cy.get('input[name="email"]');
    const termsOfService = () => cy.get('input[name="termsOfService"]');
    const role = () => cy.get('select[name="role"]');


    it('can input a name', () => {
        cy.get('input[name="first_name"]')
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

    it('button disabled when fields not filled out', () => {
        cy.get('button').should('be.disabled');
    })

    it('can check that submit is enabled when all fields are full, but disabled if not full', () => {
        cy.get('button').should('be.disabled') 
        userName().type("Emily Ryan");
        cy.get('button').should('be.disabled');
        email().type("emilyryancreative@gmail.com");
        cy.get('button').should('be.disabled');
        password().type("abc1235");
        cy.get('button').should('be.disabled');
        termsOfService().click();
        cy.get('button').should('be.disabled');
        role().select('webDeveloper');
        cy.get('button').should('be.enabled');
        cy.get('button').click();
    })




});
