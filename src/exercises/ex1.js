// script.js

const addButton = document.getElementById("add-class-button");
const element = document.getElementById("element");

function addClassToElement() {
  
      element.classList.add("bg-danger", "p-3");
    }


addButton.addEventListener("click", addClassToElement);

module.exports = addClassToElement;