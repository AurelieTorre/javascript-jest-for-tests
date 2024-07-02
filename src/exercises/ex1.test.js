const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '..', '..', 'index.html'), 'utf-8');

// Configuration de JSDOM
const dom = new JSDOM(html, {
    runScripts: "dangerously",
    resources: "usable",
    pretendToBeVisual: true
});

// Configuration de l'environnement global
global.document = dom.window.document;
global.window = dom.window;
global.navigator = dom.window.navigator;

// Attendre que le DOM soit chargé avant d'exécuter les tests
global.window.addEventListener('load', () => {
    // Importer votre script ici
    require('./ex1');

    // Exécuter vos tests ici
    runTests();
});

describe("AddClassToElement", () => {
    // Configurer le DOM avant chaque test
    beforeEach(() => {
        document.body.innerHTML = `
        <button id="add-class-button">Add Class</button>
        <div id="element"></div>
        `;
    });

    test('ajoute la classe bg-danger à l\'élément', () => {
        // Arrange
        const element = document.getElementById('element');
        
        // Act
        addClassToElement();
        
        // Assert
        expect(element.classList.contains('bg-danger')).toBe(true);
    });
  
});