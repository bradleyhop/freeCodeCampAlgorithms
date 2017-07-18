/*
 *We'll pass you an array of two numbers. Return the sum of those two numbers
 and all numbers between them.
 *
 *The lowest number will not always come first.
 */

// note: using es6 spread operator
//  to run under node: nodejs --harmony [filename]

function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++) {
      sum += i;
    }

    return sum;
}

console.log(sumAll([1, 4]));
// 10
console.log(sumAll([5, 10]));
// 45
console.log(sumAll([10, 5]));
// 45
