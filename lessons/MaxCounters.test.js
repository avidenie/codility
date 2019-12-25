const maxCounters = require('./MaxCounters')

test('test 1', () => {
  expect(maxCounters(5, [3, 4, 4, 6, 1, 4, 4])).toStrictEqual([3, 2, 2, 4, 2])
})
