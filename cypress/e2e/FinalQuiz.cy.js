describe("Zootopia Automated Tests", () => {
it ("Test 1 Registration",()=> {

cy.visit('https://testzootopia.loremipsum.ge/ka');
cy.get('.menu-pop > .rprof').click();
cy.get('.input-shablon > p > a').click();
cy.get('.bred > :nth-child(2) > a').should('have.text', 'რეგისტრაცია');
let name = "Natia";
cy.get(':nth-child(1) > .ismile').type(name);
cy.get(':nth-child(2) > .imail').type('nat_maisa@yahoo.com');
cy.get('.ipir').type('232323');
cy.get(':nth-child(4) > .itel').type('232323');
let pass = "Natia12345";
cy.get(':nth-child(5) > .ipass').type(pass);
cy.get('.reg-form-left > :nth-child(6) > .ipass').type(pass);
cy.get('#Group_15376').click();
cy.get('.regsub').click();
cy.get('.bg-transparent').click();
cy.get('.menu-pop > .iprof > p').should('have.text', "პროფილი");
});

it("Test 2 Autorization", () => {
  cy.login("nati.maisuradze@yahoo.com","Natia12345");
});

it("Test 3 add to Cart ", () => {
cy.login("nati.maisuradze@yahoo.com","Natia12345");
cy.addtocard();
});

it("Test 4 delete from card", () => {
  cy.login("nati.maisuradze@yahoo.com","Natia12345");
  cy.addtocard();
  cy.get('.clear > a').click();
  cy.get('.empty > p').should('have.text', 'კალათა ცარიელია');
 });

 it("Test 5 online payment", () => {
  cy.login("nati.maisuradze@yahoo.com","Natia12345");
  cy.addtocard();
  cy.get('.location').type("Ilia Chavchavadze street 29");
  cy.get('#delivery-price-span').should('have.text', '10')
  cy.get('.cart-submit').click();
 });
 });
