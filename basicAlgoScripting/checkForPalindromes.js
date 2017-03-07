/*
 *Return true if the given string is a palindrome. Otherwise, return false.
 *
 *A palindrome is a word or sentence that's spelled the same way both forward
 and backward, ignoring punctuation, case, and spacing.
 *
 *Note *You'll need to remove all non-alphanumeric characters (punctuation,
 spaces and symbols) and turn everything lower case in order to check for
 palindromes.
 *
 *We'll pass strings with varying formats, such as "racecar", "RaceCar", and
 "race CAR" among others.
 *
 *We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2",
 and "2_A3*3#A2".
 */

function palindrome(str) {
    // first, strip nonword chars, whitespace, and to all lower case
    // Then, reverse string.
    var test =
        str.toLowerCase().replace(/[\W_]+/g, "").split('').reverse('').join('');

    // Take original string and strip nonword chars, whitespace, lower case.
    str = str.toLowerCase().replace(/[\W_]+/g, "");

    if (str === test) {
      return true;
    } else {
      return false; }
}

console.log(palindrome("eye"));
// true
console.log(palindrome("Race car"));
// true
console.log(palindrome("trogdor"));
// false, though still awesome
console.log(palindrome("2A3*3a2"));
// true
