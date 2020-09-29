describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/login");
  });
  it("should click on sign in with google button", () => {
    cy.get(".mat-primary").click();
  });
  it("should click on sign in with facebook button", () => {
    cy.get(".mt-20").click();
  });
});
