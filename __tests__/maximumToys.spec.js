const maximumToys = require('../Sorting/maximumToys');

describe('maximumToys function', () => {
    test('it should return 4 if k = 50 and prices = "1 12 5 111 200 1000 10"', () => {
        const k = 50;
        const prices = '1 12 5 111 200 1000 10'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = [prices, k];
        const output = 4;

        expect(maximumToys(...input)).toEqual(output);
    })

    test('it should return 3 if k = 7 and prices = "1 2 3 4"', () => {
        const k = 7;
        const prices = '1 2 3 4'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = [prices, k];
        const output = 3;

        expect(maximumToys(...input)).toEqual(output);
    })

    test('it should return 3 if k = 15 and prices = "3 7 2 9 4"', () => {
        const k = 15;
        const prices = '3 7 2 9 4'.split(' ').map(qTemp => parseInt(qTemp, 10));
        const input = [prices, k];
        const output = 3;

        expect(maximumToys(...input)).toEqual(output);
    })
})
