/*
 *Convert the given number into a roman numeral.
 *
 *All roman numerals answers should be provided in upper-case.
 */

// Global array with the roman numerals ordered greatest to least.
// Because I never learned roman numerals, a key for me:
// [1000, 500, 100, 50, 10, 5, 1]
var roman = ["M", "D", "C", "L", "X", "V", "I"];

function convertToRoman(num) {
    // there's limits to this converter
    if (num > 9999 || num <= 0 || typeof num !== 'number')
        return undefined;

    var romNumeral = "";

    // thousands place
    if (parseInt(num/1000) !== 0) {
        var thousands = parseInt(num/1000);
        num -= (thousands * 1000);
        for (var i = 0; i < thousands; i++) {
            romNumeral += roman[0];
        }
    }
    // hundreds
    if (parseInt(num/100) !== 0) {
        var hundreds = parseInt(num/100);
        num -= (hundreds * 100);
        romNumeral += parseRoman("hundreds", hundreds);
    }

    // tens
    if (parseInt(num/10) !== 0) {
        var tens = parseInt(num/10);
        num -= tens * 10;
        romNumeral += parseRoman("tens", tens);
    }

    // singles
    romNumeral += parseRoman("single", num);

    return romNumeral;
}

// helper function for convertToRoman
// Take in the place holder we're working on, and its value (as a single digit)
// return a string with that place's roman numeral string
function parseRoman(placeHolder, value) {
    var romKey = {
        "hundreds" :  2,
        "tens" :      4,
        "single" :    6
    };
    var stringRoman = "";

    // using a temp variable to get the roman numeral that is in relation
    //  to our place's index (can't do maths inside an array reference)
    switch (value) {
        case 9:
            var nine = romKey[placeHolder] - 2;
            stringRoman += roman[romKey[placeHolder]] +
                roman[nine];
            break;
        case 4:
            var four = romKey[placeHolder] - 1;
            stringRoman += roman[romKey[placeHolder]] +
                roman[four];
            break;
        default:
            if (value >= 5) {
                var five = romKey[placeHolder] - 1;
                stringRoman += roman[five];
                value -= 5;
            }
            for (var j = 0; j < value; j++) {
                stringRoman += roman[romKey[placeHolder]];
            }
    }
    return stringRoman;
}

console.log(convertToRoman(2));
 //II
console.log(convertToRoman(4));
 //IV
console.log(convertToRoman(2014));
// MMXIV
