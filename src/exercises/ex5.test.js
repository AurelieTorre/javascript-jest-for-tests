describe('hoverArea event listener', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <div id="hover-area">Survoler ici</div>
        <p id="interaction-result">Hover over the area.</p>
      `;
      require('./ex5');
    });
  
    test('should update text content on mouseover', () => {
      const hoverArea = document.getElementById('hover-area');
      const interactionResult = document.getElementById('interaction-result');
      
      // Simuler l'événement mouseover
      const mouseOverEvent = new Event('mouseover');
      hoverArea.dispatchEvent(mouseOverEvent);
      
      // Vérifier que le texte a été mis à jour
      expect(interactionResult.textContent).toBe('Vous survolez la zone !');
    });
  });