const designerPdfViewer = require('../Implementation/designerPdfViewer');

describe('designerPdfViewer function', () => {
  test('it should return 9 if word = "abc" and max h is 5', () => {
    const h = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'
      .split(' ')
      .map((arTemp) => parseInt(arTemp, 10));
    const word = 'abc';
    const input = [h, word];
    const output = 9;

    expect(designerPdfViewer(...input)).toEqual(output);
  });

  test('it should return 28 if word = "zaba" and max h is 5', () => {
    const h = '1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7'
      .split(' ')
      .map((arTemp) => parseInt(arTemp, 10));
    const word = 'zaba';
    const input = [h, word];
    const output = 28;

    expect(designerPdfViewer(...input)).toEqual(output);
  });
});
