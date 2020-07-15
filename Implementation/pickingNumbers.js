/**
 * Picking Numbers
 * https://www.hackerrank.com/challenges/picking-numbers/problem
 *
 * Difficulty: Easy
 * @param {number[]} a: an array of integers
 */
function pickingNumbers(a) {
  let max = 2;
  const counters = a.reduce((acc, i) => {
    acc[i] ? acc[i]++ : (acc[i] = 1);
    return acc;
  }, {});

  for (const i in counters) {
    if (counters.hasOwnProperty(i)) {
      const current = counters[i];
      const nextTo = Math.max(counters[i - 1] || 0, counters[i + 1] || 0);
      if (max < current + nextTo) {
        max = current + nextTo;
      }
    }
  }

  return max;
}

module.exports = pickingNumbers;
