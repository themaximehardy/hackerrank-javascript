const divisibleSumPairs = require('../Implementation/divisibleSumPairs');

describe('divisibleSumPairs function', () => {
  test('it should return 5 if n = 6, k = 3 and ar = [1, 3, 2, 6, 1, 2]', () => {
    const n = 6;
    const k = 3;
    const ar = '1 3 2 6 1 2'.split(' ').map((arTemp) => parseInt(arTemp, 10));
    const input = [n, k, ar];
    const output = 5;

    expect(divisibleSumPairs(...input)).toEqual(output);
  });
});
