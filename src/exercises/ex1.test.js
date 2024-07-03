const fs = require('fs');
const path = require('path');
const addClassToElement = require('./ex1');

describe("AddClassToElement", () => {
  let addButton, element;

  beforeEach(() => {
    // Charger le contenu de index.html
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');

    // Simuler le DOM dans chaque test
    document.body.innerHTML = html;

    // Récupérer les éléments après avoir injecté le HTML
    addButton = document.getElementById("add-class-button");
    element = document.getElementById("element");

    // Vérifier que les éléments existent avant d'ajouter l'événement
    if (addButton && element) {
      addButton.addEventListener("click", addClassToElement);
    } else {
      throw new Error("Required elements are not found in the HTML");
    }
  });

  test('ajoute la classe bg-danger à element', () => {
    // Simuler un clic sur le bouton
    addButton.click();

    // Vérifier que la classe a été ajoutée
    expect(element.classList.contains('bg-danger')).toBe(true);
  });
});

