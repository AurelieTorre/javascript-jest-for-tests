const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

// Regex pour vérifier l'email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail() {
  // Obtenir la valeur du champ input
  const email = emailInput.value;

  // vérifie l'email avec la regex
  if (emailRegex.test(email)) {
    validationMessage.textContent = "L'adresse e-mail est valide.";
  } else {
    validationMessage.textContent = "L'adresse e-mail n'est pas valide.";
  }
}

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateEmail();
});