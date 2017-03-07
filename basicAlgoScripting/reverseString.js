/*
 *Reverse the provided string.
 *
 *You may need to turn the string into an array before you can reverse it.
 *
 *Your result must be a string.
 */

function reverseString(str) {
    var tmpArray = [];
    tmpArray = str.split('');
    tmpArray.reverse('');
    return tmpArray.join('');
}

console.log(reverseString("hello"));
// olleh
console.log(reverseString("Howdy"));
// ydwoH
console.log(reverseString("Greetings from Earth"));
// htraE morf sgniteerG
