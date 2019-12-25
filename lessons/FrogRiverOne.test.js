const frogRiverOne = require('./FrogRiverOne')

test('test 1', () => {
  expect(frogRiverOne(5, [1, 3, 1, 4, 2, 3, 5, 4])).toBe(6)
})

test('test 1', () => {
  expect(frogRiverOne(3, [1, 3, 1, 3, 2, 1, 3])).toBe(4)
})