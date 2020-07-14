const pageCount = require('../Implementation/pageCount');

describe('pageCount function', () => {
  test('it should return 1 if n = 6 and p = 2', () => {
    const n = 6;
    const p = 2;
    const input = [n, p];
    const output = 1;

    expect(pageCount(...input)).toEqual(output);
  });

  test('it should return 0 if n = 5 and p = 4', () => {
    const n = 5;
    const p = 4;
    const input = [n, p];
    const output = 0;

    expect(pageCount(...input)).toEqual(output);
  });
});
