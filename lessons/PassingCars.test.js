const passingCars = require('./PassingCars')

test('sample 1', () => {
  expect(passingCars([0, 1, 0, 1, 1])).toBe(5)
})

test('single car passing east', () => {
  expect(passingCars([0])).toBe(0)
})

test('single car passing west', () => {
  expect(passingCars([1])).toBe(0)
})

test('large alternate', () => {
  const source = []
  for(let i = 0; i < 10000; i++) {
    source.push(0)
    source.push(1)
  }
  expect(passingCars(source)).toBe(50005000)
})

test('large edge case', () => {
  const source = []
  for(let i = 0; i < 100000; i++) {
    source.push(0)
    source.push(1)
  }
  expect(passingCars(source)).toBe(-1)
})
