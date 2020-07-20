/**
 * Beautiful Days at the Movies
 * https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 *
 * Difficulty: Easy
 * @param {*} i: an integer, the starting day number
 * @param {*} j: an integer, the ending day number
 * @param {*} k: an integer, the divisor
 */
function beautifulDays(i, j, k) {
  let counter = 0;
  for (let z = i; z <= j; z++) {
    const reverse = Number(z.toString().split('').reverse().join(''));
    if (Number.isInteger(Math.abs(z - reverse) / k)) {
      counter++;
    }
  }

  return counter;
}

module.exports = beautifulDays;
