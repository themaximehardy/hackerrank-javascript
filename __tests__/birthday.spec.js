const birthday = require('../Implementation/birthday');

describe('birthday function', () => {
  test('it should return 3 if s = "2 5 1 3 4 4 3 5 1 1 2 1 4 1 3 3 4 2 1", d = 18 and m = 7', () => {
    const s = '2 5 1 3 4 4 3 5 1 1 2 1 4 1 3 3 4 2 1'
      .split(' ')
      .map((qTemp) => parseInt(qTemp, 10));
    const d = 18;
    const m = 7;
    const input = [s, d, m];
    const output = 3;

    expect(birthday(...input)).toEqual(output);
  });

  test('it should return 3 if s = "1 2 1 3 2", d = 3 and m = 2', () => {
    const s = '1 2 1 3 2'.split(' ').map((qTemp) => parseInt(qTemp, 10));
    const d = 3;
    const m = 2;
    const input = [s, d, m];
    const output = 2;

    expect(birthday(...input)).toEqual(output);
  });

  test('it should return 3 if s = "1 1 1 1 1 1", d = 3 and m = 2', () => {
    const s = '1 1 1 1 1 1'.split(' ').map((qTemp) => parseInt(qTemp, 10));
    const d = 3;
    const m = 2;
    const input = [s, d, m];
    const output = 0;

    expect(birthday(...input)).toEqual(output);
  });

  test('it should return 3 if s = "4", d = 4 and m = 1', () => {
    const s = '4'.split(' ').map((qTemp) => parseInt(qTemp, 10));
    const d = 4;
    const m = 1;
    const input = [s, d, m];
    const output = 1;

    expect(birthday(...input)).toEqual(output);
  });
});
