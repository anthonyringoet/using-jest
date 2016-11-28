const subtract = require('./subtract')

test('subtracts 4 - 3 to equal 1', () => {
  expect(subtract(4, 3)).toBe(1)
})
