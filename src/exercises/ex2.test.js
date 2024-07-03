const fs = require('fs');
const path = require('path');

describe('Button click changes message text', () => {
  let clickMeButton, message;

  beforeEach(() => {
    // Charger le contenu de index.html
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

    // Simuler le DOM dans chaque test
    document.body.innerHTML = html;

    // Récupérer le js après avoir chargé le DOM
    require('./ex2');

    // Récupérer les éléments après avoir injecté le HTML
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