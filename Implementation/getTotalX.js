/**
 * Between Two Sets
 * https://www.hackerrank.com/challenges/between-two-sets/problem
 * 
 * Difficulty: Easy
 * @param {number[]} a: an array of integers
 * @param {number[]} b: an array of integers 
 */
function getTotalX(a, b) {
  const n = a.length;
  const m = b.length;
  let counter = 0;
  const ab = a.concat(b);
  const nm = n + m;

  for (let i = a[n - 1]; i <= b[0]; i++) {
    counter++;
    for (let j = 0; j < nm; j++) {
      const min = Math.min(i, ab[j]);
      const max = Math.max(i, ab[j]);
      if (max % min !== 0) {
        counter--;
        break;
      }
    }
  }

  return counter;
}

module.exports = getTotalX;
