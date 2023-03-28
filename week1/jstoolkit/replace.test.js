const { replaceWord, hideWord } = require('./replace');

it('Replace word', () => {
  expect(replaceWord('Hello world', 'world', 'everybody')).toBe('Hello everybody');
});

it('Hide word', () => {
  expect(hideWord('Hide this word: cucumber', 'cucumber')).toBe('Hide this word: ********');
  expect(hideWord('Hide this word: four', 'four')).toBe('Hide this word: ****');
  expect(hideWord('Hide this word: 123456789123456', '123456789123456')).toBe('Hide this word: ***************');
});
