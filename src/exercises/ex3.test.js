const fs = require('fs');
const path = require('path');


describe('Email Validation', () => {
  let emailForm, emailInput, validationMessage;

  beforeEach(() => {
    // Charger le contenu de index.html
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');

    // Simuler le DOM dans chaque test
    document.body.innerHTML = html;

    // Récupérer le js après avoir chargé le DOM
    require('./ex3');

    // Sélectionner les éléments après avoir injecté le HTML
    emailForm = document.getElementById('email-form');
    emailInput = document.getElementById('email-input');
    validationMessage = document.getElementById('validation-message');
  });

  test('shows an invalid email message when an invalid email is submitted', () => {
    // Définir une valeur invalide pour l'input
    emailInput.value = 'invalid-email';

    // Soumettre le formulaire
    emailForm.dispatchEvent(new Event('submit'));

    // Vérifier le message de validation
    expect(validationMessage.textContent).toBe("L'adresse e-mail n'est pas valide.");
  });

});