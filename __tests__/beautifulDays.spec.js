const beautifulDays = require('../Implementation/beautifulDays');

describe('beautifulDays function', () => {
  test('it should return 2 if i = 20, j = 23 and k = 6', () => {
    const i = 20;
    const j = 23;
    const k = 6;
    const input = [i, j, k];
    const output = 2;

    expect(beautifulDays(...input)).toEqual(output);
  });
});
