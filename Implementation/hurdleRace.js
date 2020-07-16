/**
 * The Hurdle Race
 * https://www.hackerrank.com/challenges/the-hurdle-race/problem
 *
 * Difficulty: Easy
 * @param {number} k: an integer denoting the height Dan can jump naturally
 * @param {number[]} height: an array of integers denoting the heights of each hurdle
 */
function hurdleRace(k, height) {
  const maxHeight = Math.max(...height);
  return maxHeight <= k ? 0 : maxHeight - k;
}

module.exports = hurdleRace;
