/**
 * Designer PDF Viewer
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 *
 * Difficulty: Easy
 * @param {number[]} h: an array of integers representing the heights of each letter
 * @param {string} word: a string
 */
function designerPdfViewer(h, word) {
  const n = word.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    const currentLetter = word[i];
    const indexInH = parseInt(currentLetter, 36) - 10;
    if (h[indexInH] > max) {
      max = h[indexInH];
    }
  }

  return max * n;
}

module.exports = designerPdfViewer;
