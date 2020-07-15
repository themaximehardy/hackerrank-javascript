/**
 * Cats and a Mouse
 * https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
 *
 * Difficulty: Easy
 * @param {*} x: an integer, Cat A's position
 * @param {*} y: an integer, Cat B's position
 * @param {*} z: an integer, Mouse C's position
 */
function catAndMouse(x, y, z) {
  const distAC = Math.abs(x - z);
  const distBC = Math.abs(y - z);
  return distAC < distBC ? 'Cat A' : distAC > distBC ? 'Cat B' : 'Mouse C';
}

module.exports = catAndMouse;
