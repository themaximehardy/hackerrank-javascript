const migratoryBirds = require('../Implementation/migratoryBirds');

describe('migratoryBirds function', () => {
  test('it should return 4 if arr = "1 4 4 4 5 3"', () => {
    const arr = '1 4 4 4 5 3'.split(' ').map((arTemp) => parseInt(arTemp, 10));
    const input = arr;
    const output = 4;

    expect(migratoryBirds(input)).toEqual(output);
  });

  test('it should return 4 if arr = "1 2 3 4 5 4 3 2 1 3 4"', () => {
    const arr = '1 2 3 4 5 4 3 2 1 3 4'
      .split(' ')
      .map((arTemp) => parseInt(arTemp, 10));
    const input = arr;
    const output = 3;

    expect(migratoryBirds(input)).toEqual(output);
  });
});
