/**
 * Day of the Programmer
 * https://www.hackerrank.com/challenges/day-of-the-programmer/problem
 *
 * Difficulty: Easy
 * @param {number} year: an integer
 */
function dayOfProgrammer(year) {
  if (year < 1918) {
    const isLeapYearInJulianCal = year % 4 === 0;
    return `${isLeapYearInJulianCal ? '12' : '13'}.09.${year}`;
  } else {
    if (year === 1918) {
      return `26.09.${year}`; // 32 + 14 + 31 + 30 + 31 + 30 + 31 + 31 + 26
    } else {
      const isLeapYearInGregorianCal =
        year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
      return `${isLeapYearInGregorianCal ? '12' : '13'}.09.${year}`;
    }
  }
}

module.exports = dayOfProgrammer;
