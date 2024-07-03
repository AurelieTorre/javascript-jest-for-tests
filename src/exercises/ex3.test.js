require('./ex3'); // Assure-toi que le chemin est correct

describe('Email Validation', () => {
  let emailForm, emailInput, validationMessage;

  beforeEach(() => {
    // Charger le contenu HTML dans le DOM pour chaque test
    document.body.innerHTML = `
      <form id="email-form">
        <label for="email-input">Email:</label>
        <input type="email" id="email-input" required>
        <button type="submit" id="submit">Submit</button>
        <p id="validation-message"></p>
      </form>
    `;

    // Sélectionner les éléments du DOM
    emailForm = document.getElementById('email-form');
    emailInput = document.getElementById('email-input');
    validationMessage = document.getElementById('validation-message');
  });

  test('shows a valid email message when a valid email is submitted', () => {
    // Définir une valeur valide pour l'input
    emailInput.value = 'test@example.com';

    // Soumettre le formulaire
    emailForm.dispatchEvent(new Event('submit'));

    // Vérifier le message de validation
    expect(validationMessage.textContent).toBe("L'adresse e-mail est valide.");
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