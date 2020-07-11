/**
 * Divisible Sum Pairs
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 *
 * Difficulty: Easy
 * @param {number} n: the integer length of array ar
 * @param {number} k: the integer to divide the pair sum by
 * @param {number[]} ar: an array of integers
 */
function divisibleSumPairs(n, k, ar) {
  let counter = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const sum = ar[i] + ar[j];
      if (sum % k === 0) {
        counter++;
        continue;
      }
    }
  }

  return counter;
}

module.exports = divisibleSumPairs;
