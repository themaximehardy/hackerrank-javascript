/**
 * Minimum Absolute Difference in an Array
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem
 *
 * Difficulty: Easy
 * @param {number[]} arr: an array of integers
 */
function minimumAbsoluteDifference(arr) {
  const n = arr.length;
  const subtract = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n - 1; i++) {
    subtract.push(Math.abs(Number(arr[i]) - Number(arr[i + 1])));
  }
  return Math.min(...subtract);
}

module.exports = minimumAbsoluteDifference;
