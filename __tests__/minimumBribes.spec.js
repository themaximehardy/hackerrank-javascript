const minimumBribes = require('../Arrays/minimumBribes');

describe('minimumBribes function', () => {
    test('it should return 3 if q = "2 1 5 3 4"', () => {
        const q = '2 1 5 3 4'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 3;

        expect(minimumBribes(input)).toEqual(output);
    })

    test('it should return "Too chaotic" if q = "2 5 1 3 4"', () => {
        const q = '2 5 1 3 4'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 'Too chaotic';

        expect(minimumBribes(input)).toEqual(output);
    })

    test('it should return "Too chaotic" if q = "5 1 2 3 7 8 6 4"', () => {
        const q = '5 1 2 3 7 8 6 4'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 'Too chaotic';

        expect(minimumBribes(input)).toEqual(output);
    })

    test('it should return 7 if q = "1 2 5 3 7 8 6 4"', () => {
        const q = '1 2 5 3 7 8 6 4'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 7;

        expect(minimumBribes(input)).toEqual(output);
    })

    test('it should return 4 if q = "1 2 5 3 4 7 8 6"', () => {
        const q = '1 2 5 3 4 7 8 6'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = q;
        const output = 4;

        expect(minimumBribes(input)).toEqual(output);
    })
})
