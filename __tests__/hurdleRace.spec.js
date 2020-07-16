const hurdleRace = require('../Implementation/hurdleRace');

describe('hurdleRace function', () => {
  test('it should return 2 if k = 4 and height = [1, 6, 3, 5, 2]', () => {
    const k = 4;
    const height = '1 6 3 5 2'.split(' ').map((aTemp) => parseInt(aTemp, 10));
    const input = [k, height];
    const output = 2;

    expect(hurdleRace(...input)).toEqual(output);
  });

  test('it should return 0 if k = 7 and height = [2, 5, 4, 5, 2]', () => {
    const k = 7;
    const height = '2 5 4 5 2'.split(' ').map((aTemp) => parseInt(aTemp, 10));
    const input = [k, height];
    const output = 0;

    expect(hurdleRace(...input)).toEqual(output);
  });
});
