describe('Visit Home Page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains(
      "Hi, i'm Yuri Araújo, a Fullcycle Developer" +
        ' living in state of Rio de Janeiro Brazil, welcome to my page!'
    );
  });
});
