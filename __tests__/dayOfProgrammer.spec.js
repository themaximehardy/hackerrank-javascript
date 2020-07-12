const dayOfProgrammer = require('../Implementation/dayOfProgrammer');

describe('dayOfProgrammer function', () => {
  test('it should return "12.09.1984" if year = 1984', () => {
    const year = 1984;
    const input = year;
    const output = '12.09.1984';

    expect(dayOfProgrammer(input)).toEqual(output);
  });

  test('it should return "13.09.2017" if year = 2017', () => {
    const year = 2017;
    const input = year;
    const output = '13.09.2017';

    expect(dayOfProgrammer(input)).toEqual(output);
  });

  test('it should return "12.09.2016" if year = 2016', () => {
    const year = 2016;
    const input = year;
    const output = '12.09.2016';

    expect(dayOfProgrammer(input)).toEqual(output);
  });

  test('it should return "12.09.1800" if year = 1800', () => {
    const year = 1800;
    const input = year;
    const output = '12.09.1800';

    expect(dayOfProgrammer(input)).toEqual(output);
  });
});
