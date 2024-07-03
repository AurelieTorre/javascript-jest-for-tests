const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  console.log ("bouton cliqué");
  message.textContent = "En français c'est mieux : salut les gens !";
// -  change the text content of #message when #click-me-button is clicked.
// - Verify that clicking the button triggers the event handler and updates the message as expected.
}

clickMeButton.addEventListener('click', showMessage);