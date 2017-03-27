/*
 *Convert the given number into a roman numeral.
 *
 *All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
    var romNumeral = "";
    var shrinkingNum = num;

    // roman numerals in an array
    var roman = ["M", "D", "C", "L", "X", "V", "I"];
    var arabic =[1000, 500, 100, 50, 10, 5, 1];


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
        switch (hundreds) {
            case 9:
                romNumeral += "CM";
                break;
            case 4:
                romNumeral += "CD";
                break;
            default:
                if (hundreds >= 5) {
                    romNumeral += "D";
                    hundreds -= 5;
                }
                for (var j = 0; j < hundreds; j++) {
                    romNumeral += "C";
                }
        }
    }
    // tens
    if (parseInt(num/10) !== 0) {
        var tens = parseInt(num/10);
        num -= tens * 10;
        switch (tens) {
            case 9:
                romNumeral += "XC";
                break;
            case 4:
                romNumeral += "XL";
                break;
            default:
                if (tens >= 5) {
                    romNumeral += "L";
                    tens -= 5;
                }
                for (var k = 0; k < tens; k++) {
                    romNumeral += "X";
                }
        }
    }
    // singles
    switch (num) {
        case 9:
            romNumeral += "IX";
            break;
        case 4:
            romNumeral += "IV";
            break;
        default:
            if (num >= 5) {
                romNumeral += "V";
                num -= 5;
            }
            for (var l = 0; l < num; l++) {
                romNumeral +="I";
            }
    }

    return romNumeral;
}

console.log(convertToRoman(2));
 //II
console.log(convertToRoman(4));
 //IV
console.log(convertToRoman(2014));
// MMXIV
