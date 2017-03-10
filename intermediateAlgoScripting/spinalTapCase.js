/*
 *Convert a string to spinal case. Spinal case is
 all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
    var caseAndSpace = /[A-Z]| [a-z]/g;
    var spaceUnderscoreKiller = / |_/g;

    // a regex returns an array/object when a match is found:
    //  the match itself, last index of occurance, and the original string
    //  We can use this array in replace()
    str = str.replace(caseAndSpace, function(match, offset) {
        return (offset ? '-' : '') + match.toLowerCase();
    });

    return str.replace(spaceUnderscoreKiller, "");
}

console.log(spinalCase("This Is Spinal Tap"));
// "this-is-spinal-tap"
console.log(spinalCase("Teletubbies say Eh-oh"));
// "teletubbies-say-eh-oh"
console.log(spinalCase("thisIsSpinalTap"));
// "this-is-spinal-tap"
console.log(spinalCase("The_Andy_Griffith_Show"));
// "the-andy-griffith-show"
console.log(spinalCase("AllThe-small Things"));
// "all-the-small-things"
