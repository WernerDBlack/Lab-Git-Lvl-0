const sum = require('../index');

test('Substracts 2 - 1 to equal 1', () => {
  expect(sum(2, 1)).toBe(1);
});