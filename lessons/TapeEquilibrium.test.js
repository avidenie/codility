const tapeEquilibrium = require('./TapeEquilibrium')

test('sample 1', () => {
  expect(tapeEquilibrium([3, 1, 2, 4, 3])).toBe(1)
})
