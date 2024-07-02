// script.js

const addButton = document.getElementById("add-class-button");
const element = document.getElementById("element");

function addClassToElement() {
  if (element && addButton) {
    if (!(element.classList.contains("bg-danger"))){
      element.classList.add("bg-danger", "p-3");
    }
    console.log(element.classList);
  } else {
    console.error('Un ou plusieurs éléments nécessaires n\'ont pas été trouvés');
  }
}

addButton.addEventListener("click", addClassToElement);

module.exports = { addClassToElement };