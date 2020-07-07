const minimumAbsoluteDifference = require('../Greedy Algorithms/minimumAbsoluteDifference');

describe('minimumAbsoluteDifference function', () => {
    test('it should return 3 if q = "3 -7 0"', () => {
        const q = '3 -7 0'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 3;

        expect(minimumAbsoluteDifference(input)).toEqual(output);
    })

    test('it should return 1 if q = "-59 -36 -13 1 -53 -92 -2 -96 -54 75"', () => {
        const q = '-59 -36 -13 1 -53 -92 -2 -96 -54 75'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 1;

        expect(minimumAbsoluteDifference(input)).toEqual(output);
    })

    test('it should return 3 if q = "1 -3 71 68 17"', () => {
        const q = '1 -3 71 68 17'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 3;

        expect(minimumAbsoluteDifference(input)).toEqual(output);
    })
})
