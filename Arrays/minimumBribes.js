/**
 * New Year Chaos
 * https://www.hackerrank.com/challenges/new-year-chaos/problem
 * 
 * Difficulty: Medium
 * @param {number[]} q: an array of integers
 */
function minimumBribes(q) {
    const t = q.length; // the number of people in the queue
    let bribes = 0;

    for (let i = t - 1; i >= 0; i--) {
        const currentP = q[i] - (i + 1);
        if (currentP > 2) {
            return 'Too chaotic';
        }

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }

    return bribes;
}


module.exports = minimumBribes;