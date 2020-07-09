/**
 * Array Manipulation
 * https://www.hackerrank.com/challenges/crush/problem
 * Difficulty: Hard
 *
 * @param {number} n: the number of elements in your array
 * @param {array[]} queries: a two dimensional array of queries where each queries[i] contains three integers, a, b, and k
 */
function arrayManipulation(n, queries) {
  const m = queries.length; // number of operations
  const arr = new Array(n).fill(0);
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < m; i++) {
    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < n) {
      arr[queries[i][1]] -= queries[i][2];
    }
  }

  for (let j = 1; j < n; j++) {
    arr[j] += arr[j - 1];
    if (arr[j] > max) {
      max = arr[j];
    }
  }

  return max;
}

module.exports = arrayManipulation;
