/*
 *Find the smallest common multiple of the provided parameters that can be
 evenly divided by both, as well as by all sequential numbers in the range
 between these parameters.
 *
 *The range will be an array of two numbers that will not necessarily be in
 numerical order.
 *
 *e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is
 evenly divisible by all numbers between 1 and 3.
 */


function smallestCommons(arr) {

    // Can't assume that the array given is ascending order, but I guess we can
    //  assume that the array is only 2 length
    if (arr[0] > arr[1])
        arr = arr.reverse();

    // Start testing at largest number in range
    var test = arr[1] * arr[0];
    var foundIt = false;

    // fCC warns of nonterminal loop, but checking to see that we don't
    //  go beyond javascript's limit for integers
    do {
        foundIt = isMultiple(arr[0], arr[1], test);
        test++;
    } while (!foundIt && test < Number.MAX_SAFE_INTEGER);

    return test - 1;
}

function isMultiple(x, y, test) {
        for (var i = x; i <= y; i++) {
                if (test % i !== 0)
                        return false;
        }
        return true;
}

console.log(smallestCommons([1, 5]));
// 60
console.log(smallestCommons([1, 13]));
// 360360
console.log(smallestCommons([23, 18]));
// 6056820
