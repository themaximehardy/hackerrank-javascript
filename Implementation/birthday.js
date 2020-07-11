/**
 * Birthday Chocolate
 * https://www.hackerrank.com/challenges/the-birthday-bar/problem
 *
 * Difficulty: Easy
 * @param {number[]} s: an array of integers, the numbers on each of the squares of chocolate
 * @param {*} d: an integer, Ron's birth day
 * @param {*} m: an integer, Ron's birth month
 */
function birthday(s, d, m) {
  const n = s.length;
  let counter = 0;

  if (n < m) {
    return 0;
  }

  for (let i = 0; i < n; i++) {
    const sumOfContiguousSegment = s
      .slice(i, i + m)
      .reduce((acc, cur) => acc + cur, 0);
    if (sumOfContiguousSegment === d) {
      counter += 1;
    }
  }

  return counter;
}

module.exports = birthday;
