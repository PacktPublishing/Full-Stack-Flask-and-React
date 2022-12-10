const basicFunctions = require('../basicFunctions');

test('Multiply 9 * 5 to equal 45', () => {
  expect(basicFunctions.multiply(9, 5)).toBe(45);
});

test('Mabel Stewart speaker was created', () => {
  expect(basicFunctions.createSpeaker()).toEqual({firstname:"Mabel", lastname:"Stewart"});

});