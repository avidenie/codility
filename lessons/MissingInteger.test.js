const missingInteger = require('./MissingInteger')

test('example 1', () => {
  expect(missingInteger([1, 3, 6, 4, 1, 2])).toBe(5)
})

test('all negative', () => {
  expect(missingInteger([-1, -3])).toBe(1)
})

test('ascending positive numbers', () => {
  expect(missingInteger([1, 2, 3])).toBe(4)
})

test('simple', () => {
  expect(missingInteger([90, 91, 92, 93])).toBe(1)
})
