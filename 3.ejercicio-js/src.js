'use strict';

function binaryToDecimal(binary) {
    const arrayBinary = binary.toString().split('').reverse();

    let decimal = 0;

    for (let i = 0; i < arrayBinary.length; i++) {
        decimal += arrayBinary[i] * 2 ** i;
    }

    return decimal;
}

function decimalToBinary(decimal) {
    return Number(decimal.toString(2));
}

function numToBinOrDec(num, base) {
    if (base === 2) {
        return `Su binario es: ${decimalToBinary(num)}`;
    } else if (base === 10) {
        return `Su decimal es: ${binaryToDecimal(num)}`;
    } else {
        console.error('Número de base incorrecta');
    }
}

console.log(numToBinOrDec(10011, 10));
console.log(numToBinOrDec(725, 2));
