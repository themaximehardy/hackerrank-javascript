/**
 * Drawing Book
 * https://www.hackerrank.com/challenges/drawing-book/problem
 *
 * Difficulty: Easy
 * @param {number} n: an integer, the number of pages in the book
 * @param {number} p: an integer, the page number to turn to
 */
function pageCount(n, p) {
  const turnToLastPage = n % 2 === 0 ? n / 2 : (n - 1) / 2;
  const turnToPage = p % 2 === 0 ? p / 2 : (p - 1) / 2;
  return turnToPage < turnToLastPage - turnToPage
    ? turnToPage
    : turnToLastPage - turnToPage;
}

module.exports = pageCount;
