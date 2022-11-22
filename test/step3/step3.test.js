const sum = require('../../index');

test('adds 7 + 3 to equal 10', () => {
  expect(sum(7, 3)).toBe(10);
});