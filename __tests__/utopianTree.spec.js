const utopianTree = require('../Implementation/utopianTree');

describe('utopianTree function', () => {
  test('it should return 1 if n = 0', () => {
    const n = 0;
    const input = n;
    const output = 1;

    expect(utopianTree(input)).toEqual(output);
  });

  test('it should return 2 if n = 1', () => {
    const n = 1;
    const input = n;
    const output = 2;

    expect(utopianTree(input)).toEqual(output);
  });

  test('it should return 7 if n = 4', () => {
    const n = 4;
    const input = n;
    const output = 7;

    expect(utopianTree(input)).toEqual(output);
  });
});
