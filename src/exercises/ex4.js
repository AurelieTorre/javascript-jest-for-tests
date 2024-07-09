import axios from 'axios';

const res = document.getElementById('paragraph');
const eraser = document.getElementById('remove-paragraph-button');

let longitude = -1.67; // Rennes longitude
let latitude = 48.11; // Rennes latitude
const api_key = '08cb792ca8906ae401dad848ccb6410d';
const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`;

export const fetchData = async () => {
  try {
    const response = await axios.get(api_url);
    // Vérifie si la réponse contient les données attendues
    if (response.data && response.data.main && response.data.main.temp !== undefined) {
      // Conversion de la température de Kelvin à Celsius
      const temperatureCelsius = response.data.main.temp - 273.15;
      return temperatureCelsius;
    } else {
      throw new Error('Données de réponse manquantes');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};


function displayData() {
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



/* EXAMPLE OF AN API REQUEST */

/*
let longitude = 44.83; // Bordeaux longitude
let latitude = -0.57; // Bordeaux latitude
let api_key = '891fcaaa0f613df11046ed15bd1a4607'; // Teacher's API Key
let api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`; // API URL
*/