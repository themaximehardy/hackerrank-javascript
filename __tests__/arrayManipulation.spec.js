const arrayManipulation = require('../Arrays/arrayManipulation');

describe('arrayManipulation function', () => {
    test('it should return 200 if n = 5 and queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]', () => {
        const n = 5;
        const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
        const input = [n, queries];
        const output = 200;

        expect(arrayManipulation(...input)).toEqual(output);
    })

    test('it should return 10 if n = 10 and queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]]', () => {
        const n = 10;
        const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]];
        const input = [n, queries];
        const output = 10;

        expect(arrayManipulation(...input)).toEqual(output);
    })

    test('it should return 31 if n = 10 and queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]]', () => {
        const n = 10;
        const queries = [[2, 6, 8], [3, 5, 7], [1, 8, 1], [5, 9, 15]];
        const input = [n, queries];
        const output = 31;

        expect(arrayManipulation(...input)).toEqual(output);
    })
})
