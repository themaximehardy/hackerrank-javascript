/**
 * Angry Professor
 * https://www.hackerrank.com/challenges/angry-professor/problem
 *
 * Difficulty: Easy
 * @param {*} k: the threshold number of students
 * @param {*} a: an array of integers representing arrival times
 */
function angryProfessor(k, a) {
  return k > a.reduce((acc, cur) => (cur <= 0 ? acc + 1 : acc + 0), 0)
    ? 'YES'
    : 'NO';
}

module.exports = angryProfessor;
