/**
 * Kangaroo
 * https://www.hackerrank.com/challenges/kangaroo/problem
 * 
 * Difficulty: Easy
 * @param {*} x1: an integer, starting position for kangaroo 1
 * @param {*} v1: an integer, jump distance for kangaroo 1
 * @param {*} x2: an integer, starting position for kangaroo 2
 * @param {*} v2: an integer, jump distance for kangaroo 2
 */
function kangaroo(x1, v1, x2, v2) {
  let prevDistance = Math.abs(x1 - x2);
  x1 = x1 + v1;
  x2 = x2 + v2;
  let currentDistance = Math.abs(x1 - x2);

  if (prevDistance === 0 || currentDistance === 0) {
    return "YES";
  }

  while (currentDistance < prevDistance) {
    prevDistance = currentDistance;
    x1 = x1 + v1;
    x2 = x2 + v2;
    currentDistance = Math.abs(x1 - x2);

    if (prevDistance === 0 || currentDistance === 0) {
      return "YES";
    }
  }

  return "NO";
}

module.exports = kangaroo;
