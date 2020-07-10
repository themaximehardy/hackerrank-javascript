const breakingRecords = require('../Implementation/breakingRecords');

describe('breakingRecords function', () => {
  test('it should return "2 4" if scores = "10 5 20 20 4 5 2 25 1"', () => {
    const scores = '10 5 20 20 4 5 2 25 1'
      .split(' ')
      .map((qTemp) => parseInt(qTemp, 10));
    const input = scores;
    const output = '2 4';

    expect(breakingRecords(input)).toEqual(output);
  });

  test('it should return "4 0" if scores = "3 4 21 36 10 28 35 5 24 42"', () => {
    const scores = '3 4 21 36 10 28 35 5 24 42'
      .split(' ')
      .map((qTemp) => parseInt(qTemp, 10));
    const input = scores;
    const output = '4 0';

    expect(breakingRecords(input)).toEqual(output);
  });
});
