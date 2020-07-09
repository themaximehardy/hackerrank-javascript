const getTotalX = require('../Implementation/getTotalX');

describe('getTotalX function', () => {
  test('it should return 2 if a = [2, 6] and b = [24, 36]', () => {
    const a = [2, 6];
    const b = [24, 36];
    const input = [a, b];
    const output = 2;

    expect(getTotalX(...input)).toEqual(output);
  });

  test('it should return 3 if a = [2, 4] and b = [16, 32, 96]', () => {
    const a = [2, 4];
    const b = [16, 32, 96];
    const input = [a, b];
    const output = 3;

    expect(getTotalX(...input)).toEqual(output);
  });
});
