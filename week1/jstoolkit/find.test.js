const { findPositiveValue, findNegativeValue } = require('./find');

it('Find positive value', () => {
  expect(findPositiveValue([1, -2, -3])).toBe(1);
});

it('Find negative value', () => {
  expect(findNegativeValue([1, 2, -3])).toBe(-3);
});
