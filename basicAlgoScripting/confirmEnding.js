/*
 *Check if a string (first argument, str) ends with the given target string
 (second argument, target).
 *
 *This challenge can be solved with the .endsWith() method, which was
introduced in ES2015. But for the purpose of this challenge, we would like you
to use one of the JavaScript substring methods instead.
 */

function confirmEnding(str, target) {
    return str.substr( -target.length, target.length ) === target;
}

console.log(confirmEnding("Bastian", "n"));
// true
console.log(confirmEnding("Connor", "n"));
// false
console.log(confirmEnding("And you shall know us by the trail of the dead",
"dead"));
// true
