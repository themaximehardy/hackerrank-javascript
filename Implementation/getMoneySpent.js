/**
 * Electronics Shop
 * https://www.hackerrank.com/challenges/electronics-shop/problem
 *
 * Difficulty: Easy
 * @param {number[]} keyboards: an array of integers representing keyboard prices
 * @param {number[]} drives: an array of integers representing drive prices
 * @param {*} b: an integer, the Monica's budget
 */
function getMoneySpent(keyboards, drives, b) {
  let max = -1;
  const sorting = (x, y) => x - y;
  const filtering = (x) => x < b;
  keyboards.sort(sorting);
  drives.sort(sorting);
  const keyboardsFiltered = keyboards.filter(filtering);
  const drivesFiltered = drives.filter(filtering);

  const n = keyboardsFiltered.length;
  const m = drivesFiltered.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const sum = keyboardsFiltered[i] + drivesFiltered[j];
      if (sum > b) {
        break;
      }

      if (sum > max) {
        max = sum;

        if (max === b) {
          return b;
        }
      }
    }
  }

  return max;
}

module.exports = getMoneySpent;
