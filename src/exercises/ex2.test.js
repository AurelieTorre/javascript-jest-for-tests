 /**
 * @jest-environment jsdom
 */

require('./ex2');

describe('Button click changes message text', () => {
  let clickMeButton, message;

  beforeEach(() => {
    // Charger le contenu HTML dans le DOM
    document.body.innerHTML = `
      <button id="click-me-button">Click Me</button>
      <p id="message">Hello, World!</p>
    `;

    // Récupérer les éléments du DOM
    clickMeButton = document.getElementById('click-me-button');
    message = document.getElementById('message');
  });

  test('changes the text content of #message when #click-me-button is clicked', () => {
    // Simuler un clic sur le bouton
    clickMeButton.click();

    // Vérifier que le texte du paragraphe a changé
    expect(message.textContent).toBe("En français c'est mieux : salut les gens !");
  });
});