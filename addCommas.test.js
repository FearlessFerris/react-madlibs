const addCommas = require('./addCommas');

describe('#addCommas', () => {
  test('it is a function', () => {
    expect(typeof addCommas).toBe('function');
  });

  test('Adds commas to positive numbers correctly', () => {
    expect(addCommas(1234)).toBe('1,234');
  });

  test('Adds commas to negative numbers correctly', () => {
    expect(addCommas(-5678)).toBe('-5,678');
  });

  test('Handles decimal numbers correctly', () => {
    expect(addCommas(12345.678)).toBe('12,345.678');
  });

  test('Handles large numbers correctly', () => {
    expect(addCommas(9876543210)).toBe('9,876,543,210');
  });
});
