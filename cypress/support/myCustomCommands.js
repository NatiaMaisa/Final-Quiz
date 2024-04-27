Cypress.Commands.add('login', (userName, password)=> {
    cy.visit("https://testzootopia.loremipsum.ge/ka");
    cy.get(".menu-pop > .rprof").click();
    cy.get(".avtorization > .input-shablon > h2").should("have.text", "ავტორიზაცია");
    cy.get(":nth-child(5) > .imail").type(userName);
    cy.get(".ipass").type(password);
    cy.get(".avtorization > .input-shablon > .form-button").click();
    cy.get(".menu-pop > .iprof > p").should("have.text", "პროფილი");
})

    Cypress.Commands.add('addtocard', ()=> {
        cy.get('.popmenu-burger > .burger-span').click();
        cy.get('[imgsrc="/uploads/ProductCategory/335031597313845.png"] > [href="javascript:void(0)"]').click();
        cy.get(".cat-down.active > .category-holder > :nth-child(1) > .category-drop-title").click();
        cy.get(".category-holder > .active > :nth-child(2) > a").click();
        cy.get(".bred > :nth-child(4) > a").should("have.text", "მშრალი საკვები");
        cy.get(".filter-open").click();
        cy.get(":nth-child(2) > .filter-btn > h2").should("have.text", "ბრენდი").click();
        cy.get('[for="age1"]').click();
        cy.get(".filter-button").click();
        cy.get(":nth-child(7) > h2 > a").click();
        cy.get(".add-pro > span > :nth-child(1)").click();
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click();
        cy.get(".bred > :nth-child(2) > a").should("have.text", "კალათა");
        cy.get('[href="https://testzootopia.loremipsum.ge/ka/product/30-Bosch-Adult-Menue-"] > h2').should("be.visible");

    })