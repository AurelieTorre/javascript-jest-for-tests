const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

// Expression régulière pour valider l'email
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail() {
  // Récupérer la valeur de l'input
  const email = emailInput.value;

  // Vérifier si l'email correspond à l'expression régulière
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