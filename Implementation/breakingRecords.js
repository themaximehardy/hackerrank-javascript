/**
 * Breaking the Records
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 *
 * Difficulty: Easy
 * @param {number[]} scores: an array of integers
 */
function breakingRecords(scores) {
  const n = scores.length;
  let maxMin = [scores[0], scores[0]]; // max, min
  let counters = [0, 0]; // max, min

  for (let i = 0; i < n; i++) {
    const currScore = scores[i];
    let [currMax, currMin] = maxMin;
    if (currScore > currMax) {
      maxMin[0] = currScore;
      counters[0] += 1;
      continue;
    }
    if (currScore < currMin) {
      maxMin[1] = currScore;
      counters[1] += 1;
      continue;
    }
  }

  return counters.join(' ');
}

module.exports = breakingRecords;
