/*
 *Return the length of the longest word in the provided sentence.
 *
 *Your response should be a number.
 */

function findLongestWord(str) {
    var longest = 0;
    str = str.split(' ');
    for (var i in str) {
        if (longest < str[i].length) {
            console.log(str[i].length);
            longest = str[i].length;
        }
    }
    return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 6
console.log(findLongestWord("May the force be with you."));
// 5
