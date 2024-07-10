const hoverArea = document.getElementById('hover-area');
const interactionResult = document.getElementById('interaction-result');


// L'écouteur d'événement pour le survol
const setupHoverListener = () => {
  hoverArea.addEventListener('mouseover', () => {
    interactionResult.textContent = 'Vous survolez la zone !';
  });

  // Ajouter un écouteur d'événement pour quand la souris quitte la zone
  hoverArea.addEventListener('mouseout', () => {
    interactionResult.textContent = 'Vous avez quitté la zone de survol.';
  });
};

setupHoverListener();

