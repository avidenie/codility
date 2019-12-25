/**
 * This is a demo task.
 *
 * Write a function:
 *
 * function solution(A);
 *
 * that, given an array A of N integers, returns the smallest positive integer
 * (greater than 0) that does not occur in A.
 *
 * For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
 *
 * Given A = [1, 2, 3], the function should return 4.
 *
 * Given A = [−1, −3], the function should return 1.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 * N is an integer within the range [1..100,000]; each element of array A is an
 * integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
  const sorted = A.sort((a, b) => a - b)

  let current = 0
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] - current > 1) {
      return current + 1
    }
    if (sorted[i] > 0) {
      current = sorted[i]
    }
  }

  return current < 0 ? 1 : current + 1
}

module.exports = solution
