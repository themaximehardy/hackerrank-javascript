const bonAppetit = require('../Implementation/bonAppetit');

describe('bonAppetit function', () => {
  test('it should return 5 if bill = "2 4 6", k = 2 and b = 3', () => {
    const bill = '2 4 6'.split(' ').map((arTemp) => parseInt(arTemp, 10));
    const k = 2;
    const b = 3;
    const input = [bill, k, b];
    const output = 'Bon Appetit';

    expect(bonAppetit(...input)).toEqual(output);
  });

  test('it should return 5 if bill = "3 10 2 9", k = 1 and b = 12', () => {
    const bill = '3 10 2 9'.split(' ').map((arTemp) => parseInt(arTemp, 10));
    const k = 1;
    const b = 12;
    const input = [bill, k, b];
    const output = 5;

    expect(bonAppetit(...input)).toEqual(output);
  });

  test('it should return 5 if bill = "3 10 2 9", k = 1 and b = 7', () => {
    const bill = '3 10 2 9'.split(' ').map((arTemp) => parseInt(arTemp, 10));
    const k = 1;
    const b = 7;
    const input = [bill, k, b];
    const output = 'Bon Appetit';

    expect(bonAppetit(...input)).toEqual(output);
  });
});
