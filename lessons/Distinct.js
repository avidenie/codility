// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let obj = {};

    for (let i = 0; i < A.length; i++) {
        const element = A[i];
        obj[element] = !obj[element] ? 1 : obj[element] + 1;
    }

    return Object.keys(obj).length;
}
