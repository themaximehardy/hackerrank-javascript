/**
 * Migratory Birds
 * https://www.hackerrank.com/challenges/migratory-birds/problem
 *
 * Difficulty: Easy
 * @param {number[]} arr: an array of integers representing types of birds sighted
 */
function migratoryBirds(arr) {
  const counters = arr.reduce((acc, bird) => {
    acc[bird] ? acc[bird]++ : (acc[bird] = 1);
    return acc;
  }, {});

  let maxIdx = -1;
  let maxValue = -1;
  for (const counter in counters) {
    if (counters.hasOwnProperty(counter)) {
      if (maxValue < Number(counters[counter])) {
        maxIdx = Number(counter);
        maxValue = Number(counters[counter]);
      }
    }
  }

  return maxIdx;
}

module.exports = migratoryBirds;
