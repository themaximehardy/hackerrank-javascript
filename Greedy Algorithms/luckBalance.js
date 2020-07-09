/**
 * Luck Balance
 * https://www.hackerrank.com/challenges/luck-balance/problem
 *
 * Difficulty: Easy
 * @param {number} k: the number of important contests Lena can lose
 * @param {number[][]} contests: a 2D array of integers
 */
function luckBalance(k, contests) {
  const importantAmountOfLuck = [];
  let important = 0;
  let unimportant = 0;

  for (const contest of contests) {
    const amountOfLuck = contest[0];
    if (contest[1] === 1) {
      importantAmountOfLuck.push(amountOfLuck);
      important += amountOfLuck;
      continue;
    }

    unimportant += amountOfLuck;
  }

  let result = important + unimportant;

  const importantAmountOfLuckLen = importantAmountOfLuck.length;
  if (k < importantAmountOfLuckLen) {
    const nbHasToWin = importantAmountOfLuckLen - k;
    importantAmountOfLuck.sort((a, b) => a - b);

    for (let i = 0; i < nbHasToWin; i++) {
      result -= importantAmountOfLuck[i] * 2;
    }
  }

  return result;
}

module.exports = luckBalance;
