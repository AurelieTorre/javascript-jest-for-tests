const api_key = '08cb792ca8906ae401dad848ccb6410d';
const latitude = 48.11;
const longitude = -1.67;
const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

const res = document.getElementById('paragraph');
const eraser = document.getElementById('remove-paragraph-button');

async function fetchData() {
  try {
    const response = await fetch(api_url);
    const jsonData = await response.json();
    if (jsonData && jsonData.main && jsonData.main.temp !== undefined && jsonData.main.temp !== null) {
      const temperatureCelsius = jsonData.main.temp - 273.15;
      return temperatureCelsius;
    } else {
      throw new Error('Données de réponse manquantes');
    }
  } catch (error) {
    console.error('Erreur à la récupération des données :', error);
  }
}

const displayData = () => {
  fetchData()
    .then((temperature) => {
      if (temperature !== undefined) {
        res.textContent = `La température actuelle à Rennes est de ${temperature.toFixed(2)} °C.`;
      } else {
        console.error('La température est indéfinie.');
      }
    })
    .catch((err) => console.error('Erreur lors de l\'affichage des données :', err));
}

function removeParagraph() {
  res.textContent = '';
}

document.addEventListener('DOMContentLoaded', () => {
  displayData();
  eraser.addEventListener('click', removeParagraph);
});

module.exports = fetchData;

/* EXAMPLE OF AN API REQUEST */

/*
let longitude = 44.83; // Bordeaux longitude
let latitude = -0.57; // Bordeaux latitude
let api_key = '891fcaaa0f613df11046ed15bd1a4607'; // Teacher's API Key
let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`; // API URL
*/