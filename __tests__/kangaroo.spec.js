const kangaroo = require('../Implementation/kangaroo');

describe('kangaroo function', () => {
  test('it should return YES if x1 = 0, v1 = 3, x2 = 4, v2 = 2', () => {
    const input = [0, 3, 4, 2];
    const output = 'YES';

    expect(kangaroo(...input)).toEqual(output);
  });

  test('it should return NO if x1 = 0, v1 = 2, x2 = 5, v2 = 3', () => {
    const input = [0, 2, 5, 3];
    const output = 'NO';

    expect(kangaroo(...input)).toEqual(output);
  });
});
