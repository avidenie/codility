const permMissingElem = require('./PermMissingElem')

test('sample 1', () => {
  expect(permMissingElem([2, 3, 1, 5])).toBe(4)
})

test('sample 2', () => {
  expect(permMissingElem([3,5,1,4,6])).toBe(2)
})
