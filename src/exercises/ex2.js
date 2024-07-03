const clickMeButton = document.getElementById('click-me-button');
const message = document.getElementById('message');

function showMessage() {
  // change message content
  message.textContent = "En français c'est mieux : salut les gens !";
}

clickMeButton.addEventListener('click', showMessage);