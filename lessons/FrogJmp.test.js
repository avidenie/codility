const frogJmp = require('./frogJmp')

test('example 1', () => {
  expect(frogJmp(10, 85, 30)).toBe(3)
})

test('example 2', () => {
  expect(frogJmp(1, 14, 3)).toBe(5)
})

test('example 3', () => {
  expect(frogJmp(100, 1001, 100)).toBe(10)
})

test('example 4', () => {
  expect(frogJmp(1, 1000000000, 1000)).toBe(1000000)
})