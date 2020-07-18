/**
 * Utopian Tree
 * https://www.hackerrank.com/challenges/utopian-tree/problem
 *
 * Difficulty: Easy
 * @param {number} n: an integer, the number of growth cycles to simulate
 */
function utopianTree(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = i % 2 === 0 ? total + 1 : total * 2;
  }

  return total;
}

module.exports = utopianTree;
