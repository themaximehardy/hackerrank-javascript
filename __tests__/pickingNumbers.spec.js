const pickingNumbers = require('../Implementation/pickingNumbers');

describe('pickingNumbers function', () => {
  test('it should return 3 if a = [4, 6, 5, 3, 3, 1]', () => {
    const a = '4 6 5 3 3 1'.split(' ').map((aTemp) => parseInt(aTemp, 10));
    const input = a;
    const output = 3;

    expect(pickingNumbers(input)).toEqual(output);
  });

  test('it should return 3 if a = [1, 2, 2, 3, 1, 2]', () => {
    const a = '1 2 2 3 1 2'.split(' ').map((aTemp) => parseInt(aTemp, 10));
    const input = a;
    const output = 5;

    expect(pickingNumbers(input)).toEqual(output);
  });
});
