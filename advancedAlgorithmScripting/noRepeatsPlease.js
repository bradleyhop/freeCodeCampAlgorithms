/*
 *Return the number of total permutations of the provided string that don't
 * have repeated consecutive letters. Assume that all characters in the provided
 * string are each unique.
 *
 *For example, aab should return 2 because it has 6 total permutations (aab,
 * aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same
 * letter (in this case a) repeating.
 */

function permAlone(str) {
    let noRepeatPerm = 0;

    // get array of all permutations, double letters included
    let allPerms = permutator(str);

    // count only permutations with no repeated characters
    for (let i in allPerms) {
        if (!(/(.)\1+/.test(allPerms[i]))) {
            noRepeatPerm += 1;
        }
    }

    return noRepeatPerm;
}

// takes in a string, returns an array of strings containing all permutations
function permutator(str) {
    // easier to work with array
    let inputArr = str.split('');
    let result = [];

    function permute(arr, temp) {
        temp = temp || [];
        if (arr.length === 0) {
            result.push(temp);
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), temp.concat(next));
            }
        }
    }

    permute(inputArr);

    for (let i in result){
        result[i] = result[i].join('');
    }

    return result;
}


console.log(permAlone('aab'));
// 2
console.log(permAlone('aaa'));
// 0
console.log(permAlone('aabb'));
// 8
console.log(permAlone('abcdefa'));
// 3600
