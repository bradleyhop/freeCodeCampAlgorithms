/*
 *Create a function that takes two or more arrays and returns an array of the
 *symmetric difference (△ or ⊕) of the provided arrays.
 *
 *Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the
 *mathematical term "symmetric difference" of two sets is the set of elements
 *which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For
 *every additional symmetric difference you take (say on a set D = {2, 3}), you
 *should get the set with elements which are in either of the two the sets but
 *not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */

function sym(args) {
    let arrs = [...arguments];
    var allNums = [];

    // populate an array with every number in all arrays
    arrs.forEach( (a) => {
        for (let i = 0; i < a.length; i++) {
            if (allNums.indexOf(a[i]) === -1)
                allNums.push(a[i]);
        }
    });
    console.log(allNums);

    // test argument arrays agains full array

    return allNums.reduce( function(a) {
        for (let i = 0; i < arrs.length; i++) {
            let temp = allNums.indexOf(arrs[i]);
            allNums.filter( e => e === temp );
        }
    });
}

console.log(sym([1,2,3], [5,2,1,4]));
// 3, 4, 5

console.log(sym([1,2,3,4],[3,1,5,6]));
