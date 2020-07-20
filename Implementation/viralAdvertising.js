/**
 * Viral Advertising
 * https://www.hackerrank.com/challenges/strange-advertising/problem
 *
 * Difficulty: Easy
 * @param {*} n: an integer, the number of days
 */
function viralAdvertising(n) {
  const NB_PEOPLE_START = 5;
  const NB_SHARE_FOLLOWING_DAY = 3;
  let shared = NB_PEOPLE_START;
  let liked = Math.floor(NB_PEOPLE_START / 2);
  let cumulative = liked;

  for (let i = 1; i < n; i++) {
    shared = liked * NB_SHARE_FOLLOWING_DAY;
    liked = Math.floor(shared / 2);
    cumulative += liked;
  }

  return cumulative;
}

module.exports = viralAdvertising;
