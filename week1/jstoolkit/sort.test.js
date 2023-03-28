const { ascendingSort, descendingSort } = require('./sort');

it('Ascending sort', () => {
  expect(ascendingSort([30, 10, 20])).toEqual([10, 20, 30]);
});

it('Descending sort', () => {
  expect(descendingSort([30, 10, 20])).toEqual([30, 20, 10]);
});
