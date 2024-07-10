const fetchData = require('./ex4');

describe('fetchData', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should return temperature in Celsius when API response is valid', async () => {
    // création d'un mock
    const mockResponse = {
      main: {
        temp: 300.15 // K
      }
    };

    // comme mockResponse est un objet, il faut le transformer en string
    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const temperature = await fetchData();
    expect(temperature).toBeCloseTo(27, 2); // 300.15K - 273.15 = 27°C, et le 2e chiffre est la précision
  });

});