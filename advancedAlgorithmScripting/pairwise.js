/*
 *Given an array arr, find element pairs whose sum equal the second argument arg
 *and return the sum of their indices.
 *
 *If multiple pairs are possible that have the same numeric elements but
 *different indices, return the smallest sum of indices. Once an element has been
 *used, it cannot be reused to pair with another.
 *
 *For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to
 *20 are [7, 13] and [9, 11]. We can then write out the array with their indices
 *and values.
 *
 *Index	0	1	2	3	4
 *Value	7	9	11	13      15
 *Below we'll take their corresponding indices and add them.
 *
 *7 + 13 = 20 → Indices 0 + 3 = 3 9 + 11 = 20 → Indices 1 + 2 = 3 3 + 3 = 6 →
 *Return 6
 * reduce?
 */

function pairwise(arr, arg) {
    // leave original arr as is
    let copyArr = arr;
    // store number sets whose sum results in arg
    let pairArr = [];

    // forEach( value, index )
    copyArr.forEach( (base, bI) => {
        copyArr.forEach( (add, aI) => {
            if ( base + add === arg && bI !== aI ) {
                if (pairArr.indexOf(bI) < 0 && pairArr.indexOf(aI) < 0) {
                    pairArr.push(bI, aI);
                }
            }
        });
    });

    return pairArr.reduce( (accum, current) => {
            return accum + current;
    }, 0);
}

console.log(pairwise([1,4,2,3,0,5], 7));
// 11
console.log(pairwise([1, 3, 2, 4], 4));
// 1
console.log(pairwise([1, 1, 1], 2));
// 1
console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
// 10
