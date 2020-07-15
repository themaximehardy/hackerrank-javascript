const catAndMouse = require('../Implementation/catAndMouse');

describe('catAndMouse function', () => {
  test('it should return "Cat B" if x = 1, y = 2 and z = 3', () => {
    const x = 1;
    const y = 2;
    const z = 3;
    const input = [x, y, z];
    const output = 'Cat B';

    expect(catAndMouse(...input)).toEqual(output);
  });

  test('it should return "Mouse C" if x = 1, y = 3 and z = 2', () => {
    const x = 1;
    const y = 3;
    const z = 2;
    const input = [x, y, z];
    const output = 'Mouse C';

    expect(catAndMouse(...input)).toEqual(output);
  });
});
