const binaryGap = require('./BinaryGap')

test('binary gap for 9 is 2', () => {
  expect(binaryGap(9)).toBe(2)
})

test('binary gap for 529 is 4', () => {
  expect(binaryGap(529)).toBe(4)
})

test('binary gap for 15 is 0', () => {
  expect(binaryGap(15)).toBe(0)
})

test('binary gap for 1041 is 5', () => {
  expect(binaryGap(1041)).toBe(5)
})