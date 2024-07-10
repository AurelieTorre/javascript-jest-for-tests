const fs = require('fs');
const path = require('path');

describe('hoverArea event listener', () => {
  beforeEach(() => {

    // Charger le contenu de index.html
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

    // Simuler le DOM dans chaque test
    document.body.innerHTML = html;

    // Récupérer le js après avoir chargé le DOM
    require('./ex5');

  });

  test('should update text content on mouseover', () => {

    // Récupérer les éléments
    const hoverArea = document.getElementById('hover-area');
    const interactionResult = document.getElementById('interaction-result');

    // Simuler l'événement mouseover
    const mouseOverEvent = new Event('mouseover');
    hoverArea.dispatchEvent(mouseOverEvent);

    // Vérifier que le texte a été mis à jour
    expect(interactionResult.textContent).toBe('Vous survolez la zone !');
  });
});