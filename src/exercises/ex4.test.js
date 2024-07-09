// __tests__/fetchData.test.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchData } from './ex4';

const mock = new MockAdapter(axios);

describe('fetchData', () => {
  afterEach(() => {
    mock.reset();
  });

  it('devrait retourner la température en Celsius', async () => {
    // Configuration du mock pour retourner une réponse spécifique
    const mockResponse = {
      data: {
        main: {
          temp: 300.15 // Par exemple, 300.15 Kelvin (27°C)
        }
      }
    };

    mock.onGet('https://api.openweathermap.org/data/2.5/weather?lat=48.11&lon=-1.67&appid=08cb792ca8906ae401dad848ccb6410d').reply(200, mockResponse);

    // Appel de la fonction fetchData
    const temperature = await fetchData();

    // Vérification des résultats
    expect(temperature).toBeCloseTo(27, 2); // Vérifie que la température est proche de 27°C avec une précision de 2 décimales
  });

  it('devrait gérer les erreurs de la requête', async () => {
    // Configuration du mock pour retourner une erreur
    mock.onGet('https://api.openweathermap.org/data/2.5/weather?lat=48.11&lon=-1.67&appid=08cb792ca8906ae401dad848ccb6410d').reply(500);

    // Appel de la fonction fetchData et vérification qu'elle renvoie undefined en cas d'erreur
    const temperature = await fetchData();
    expect(temperature).toBeUndefined();
  });
});