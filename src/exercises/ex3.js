const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const validationMessage = document.getElementById('validation-message');

function validateEmail() {
  // Your code here: Implement email validation and display a message accordingly.
// - In the index.html file, there is a form with the ID email-form, an email input field with the ID email-input, and a validation message paragraph with the ID validation-message.
// - In the script.js file, write the validateEmail function to validate the email entered by the user. You can use regular expressions or simple checks for this exercise.
// - When the form is submitted (by clicking the "Submit" button), prevent the default form submission behavior, and call the validateEmail function to display a validation message based on whether the email is valid or not.
}

emailForm.addEventListener('submit', function (e) {
  e.preventDefault();
  validateEmail();
});