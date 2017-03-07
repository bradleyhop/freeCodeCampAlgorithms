/*
 *Return an English translated sentence of the passed binary string.
 *
 *The binary string will be space separated.
 */


function binaryAgent(str) {
    var binArr = str.split(" ");
    var newArr = [];
    var newStr = '';

    for (var i = 0; i < binArr.length; i++) {
        newArr.push(binToDec(binArr[i]));
    }

    for (var j = 0; j < newArr.length; j++) {
        newStr += String.fromCharCode(newArr[j]);
    }

    return newStr;
}

function binToDec(bin) {
    var numb = bin.split("");
    var sum = 0;

    for (i = 0; i < numb.length; i++) {
        sum += (numb[i] * Math.pow(2, numb.length - i - 1));
    }

    return sum;
}


console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Aren't bonfires fun!?
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));
// I love FreeCodeCamp!
