const angryProfessor = require('../Implementation/angryProfessor');

describe('angryProfessor function', () => {
  test('it should return "YES" if k = 3 and a = [-1, -3, 4, 2]', () => {
    const k = 3;
    const a = [-1, -3, 4, 2];
    const input = [k, a];
    const output = 'YES';

    expect(angryProfessor(...input)).toEqual(output);
  });

  test('it should return "NO" if k = 2 and a = [0, -1, 2, 1]', () => {
    const k = 2;
    const a = [0, -1, 2, 1];
    const input = [k, a];
    const output = 'NO';

    expect(angryProfessor(...input)).toEqual(output);
  });
});
