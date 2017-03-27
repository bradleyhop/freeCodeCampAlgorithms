/*
 *Create a function that sums two arguments together. If only one argument is
 provided, then return a function that expects one argument and returns the
 sum.
 *
 *For example, addTogether(2, 3) should return 5, and addTogether(2) should
 return a function.
 *
 *Calling this returned function with a single argument will then return the
 sum:
 *
 *var sumTwoAnd = addTogether(2);
 *
 *sumTwoAnd(3) returns 5.
 *
 *If either argument isn't a valid number, return undefined.
 */

function addTogether() {
    // are we even getting any good input, bro?
    if (arguments.length > 2 || arguments.length < 0 ||
        typeof arguments[0] !== 'number' ) {
        return undefined;
    // only on argument passed, return function
    } else if (arguments.length === 1) {
        var a = arguments[0];
        return function(b) {
            if (typeof b !== 'number') {
                return undefined;
            } else {
                return a + b ;
            }
        };
    // 2 arguments passed, attempt to sum
    } else {
        if (typeof arguments[1] !== 'number'){
            return undefined;
        } else {
            return arguments[0] + arguments[1];
        }
    }
}

var sumTwoAnd = addTogether(2);
console.log(sumTwoAnd(3));
// 5
console.log(addTogether(2, 3));
// 5
console.log(addTogether(2));
// undefined
console.log(addTogether(2, "3"));
// undefined
