/**
 * Bon Appétit
 * https://www.hackerrank.com/challenges/bon-appetit/problem
 *
 * @param {number[]} bill: an array of integers representing the cost of each item ordered
 * @param {number} k: an integer representing the zero-based index of the item Anna doesn't eat
 * @param {number} b: the amount of money that Anna contributed to the bill
 */
function bonAppetit(bill, k, b) {
  const total = bill.reduce((acc, price) => acc + price, 0);
  const annaTotal = Number((total - bill[k]) / 2);
  return annaTotal === b ? 'Bon Appetit' : b - annaTotal;
}

module.exports = bonAppetit;
