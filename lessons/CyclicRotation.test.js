const CyclicRotation = require('./CyclicRotation')

test('example 1', () => {
  expect(CyclicRotation([3, 8, 9, 7, 6], 3)).toStrictEqual([9, 7, 6, 3, 8])
})

test('example 2', () => {
  expect(CyclicRotation([1, 1, 2, 3, 5], 42)).toStrictEqual([3, 5, 1, 1, 2])
})
