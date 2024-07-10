const fetchData = require('./ex4');

describe('fetchData', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('should return temperature in Celsius when API response is valid', async () => {
    const mockResponse = {
      main: {
        temp: 300.15 // K
      }
    };

    fetch.mockResponseOnce(JSON.stringify(mockResponse));

    const temperature = await fetchData();
    expect(temperature).toBeCloseTo(27, 2); // 300.15K - 273.15 = 27°C
  });

  // test('should throw an error when API response is missing temp', async () => {
  //   const mockResponse = {
  //     main: {}
  //   };

  //   fetch.mockResponseOnce(JSON.stringify(mockResponse));

  //   await expect(fetchData()).rejects.toThrow('Données de réponse manquantes');
  // });

  // test('should log an error when fetch fails', async () => {
  //   const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

  //   fetch.mockRejectOnce(new Error('Network error'));

  //   await fetchData();

  //   expect(consoleSpy).toHaveBeenCalledWith('Erreur à la récupération des données :', expect.any(Error));

  //   consoleSpy.mockRestore();
  // });
});