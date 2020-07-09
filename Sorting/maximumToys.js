/**
 * Mark and Toys
 * https://www.hackerrank.com/challenges/mark-and-toys/problem
 *
 * Difficulty: Easy
 * @param {number[]} prices: an array of integers representing toy prices
 * @param {number} k: an integer
 */
function maximumToys(prices, k) {
  const n = prices.length;
  prices.sort((a, b) => a - b);
  let total = 0;
  let maxNumberOfToys = 0;

  for (let i = 0; i < n; i++) {
    const sum = total + prices[i];
    if (sum >= k) {
      return maxNumberOfToys;
    }

    total = sum;
    maxNumberOfToys++;
  }
}

module.exports = maximumToys;
