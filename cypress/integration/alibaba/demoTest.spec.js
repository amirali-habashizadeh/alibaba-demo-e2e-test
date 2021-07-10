describe("Demo Test of Alibaba", () => {

    it('Scroll to the bottom of the page and click on Connect us',  () => {
        cy.visit("/");
        cy.wait(3000);
        cy.scrollTo('bottom');
        cy.get('.site-footer').contains('تماس با ما').click();
        cy.wait(3000);
    });

    it("Search airplane With Type Name.", () => {
        cy.visit("/");
        cy.wait(3000);
        cy.get('.radifier[value="twoWay"]').click({force: true});

        cy.get('.multitab-picker__input[placeholder="مبدا"]').type('تهران', {force: true});
        cy.get('.multitab-picker__items').contains('تهران').click();

        cy.scrollTo('top');
        cy.get('.multitab-picker__input[placeholder="مقصد"]').type('مشهد' );
        cy.get('.multitab-picker__items').contains('مشهد').click();

        // cy.get('.form-control[placeholder="تاریخ رفت"]').click();
        cy.get('.calendar__day today').click();
        cy.get('.calendar__day').get('.has-tooltip').click();
        cy.get('.btn btn-block btn-orange py-1 w-500').click();

        cy.get('.px-1 mb-2 clearfix not-selectable')
            .should('contain', 'بزرگسال')
            .get('.inline-block style-btn-increase').dblclick(4);
        cy.get('.domestic-search').click();
        cy.waitFor('.isCompleted');
    });
});