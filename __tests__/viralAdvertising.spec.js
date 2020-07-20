const viralAdvertising = require('../Implementation/viralAdvertising');

describe('viralAdvertising function', () => {
  test('it should return 2 if n = 1', () => {
    const n = 1;
    const input = n;
    const output = 2;

    expect(viralAdvertising(input)).toEqual(output);
  });

  test('it should return 9 if n = 3', () => {
    const n = 3;
    const input = n;
    const output = 9;

    expect(viralAdvertising(input)).toEqual(output);
  });

  test('it should return 15 if n = 4', () => {
    const n = 4;
    const input = n;
    const output = 15;

    expect(viralAdvertising(input)).toEqual(output);
  });

  test('it should return 24 if n = 5', () => {
    const n = 5;
    const input = n;
    const output = 24;

    expect(viralAdvertising(input)).toEqual(output);
  });
});
