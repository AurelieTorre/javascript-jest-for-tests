const fs = require('fs');
const path = require('path');

describe("AddClassToElement", () => {
  let addButton, element;

  beforeEach(() => {
    // Charger le contenu de index.html
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

    // Simuler le DOM dans chaque test
    document.body.innerHTML = html;

    // Récupérer le js après avoir chargé le DOM
    require('./ex1');

    // Récupérer les éléments après avoir injecté le HTML
    addButton = document.getElementById("add-class-button");
    element = document.getElementById("element");

  });

  test('add class bg-danger to element', () => {
    // Simuler un clic sur le bouton
    addButton.click();

    // Vérifier que la classe a été ajoutée
    expect(element.classList.contains('bg-danger')).toBe(true);
  });
});

