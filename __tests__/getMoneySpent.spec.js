const getMoneySpent = require('../Implementation/getMoneySpent');

describe('getMoneySpent function', () => {
  test('it should return 9 if keyboards = [3, 1], drives = [5 2 8] and b = 10', () => {
    const keyboards = '3 1'
      .split(' ')
      .map((drivesTemp) => parseInt(drivesTemp, 10));
    const drives = '5 2 8'
      .split(' ')
      .map((drivesTemp) => parseInt(drivesTemp, 10));
    const b = 10;
    const input = [keyboards, drives, b];
    const output = 9;

    expect(getMoneySpent(...input)).toEqual(output);
  });

  test('it should return -1 if keyboards = [4], drives = [5] and b = 5', () => {
    const keyboards = '4'
      .split(' ')
      .map((drivesTemp) => parseInt(drivesTemp, 10));
    const drives = '5'.split(' ').map((drivesTemp) => parseInt(drivesTemp, 10));
    const b = 5;
    const input = [keyboards, drives, b];
    const output = -1;

    expect(getMoneySpent(...input)).toEqual(output);
  });
});
