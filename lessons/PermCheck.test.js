const permCheck = require('./PermCheck')

test('sample 1', () => {
  expect(permCheck([4, 1, 3, 2])).toBe(1)
})
