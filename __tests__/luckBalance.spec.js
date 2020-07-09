const luckBalance = require('../Greedy Algorithms/luckBalance');

describe('luckBalance function', () => {
  test('it should return 10 if k = 2 and contests = [[5, 1], [1, 1], [4, 0]]', () => {
    const k = 2;
    const contests = [
      [5, 1],
      [1, 1],
      [4, 0],
    ];
    const input = [k, contests];
    const output = 10;

    expect(luckBalance(...input)).toEqual(output);
  });

  test('it should return 8 if k = 1 and contests = [[5, 1], [1, 1], [4, 0]]', () => {
    const k = 1;
    const contests = [
      [5, 1],
      [1, 1],
      [4, 0],
    ];
    const input = [k, contests];
    const output = 8;

    expect(luckBalance(...input)).toEqual(output);
  });

  test('it should return 29 if k = 3 and contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]', () => {
    const k = 3;
    const contests = [
      [5, 1],
      [2, 1],
      [1, 1],
      [8, 1],
      [10, 0],
      [5, 0],
    ];
    const input = [k, contests];
    const output = 29;

    expect(luckBalance(...input)).toEqual(output);
  });
});
