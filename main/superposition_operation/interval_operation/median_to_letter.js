'use strict';

function median_to_letter(collection) {
    let lenOfCollection = (collection.length % 2 === 0) ? collection.length : collection.length + 1;
    let upperMedian = Number(collection[lenOfCollection / 2 - 1]);
    let lowerMedian = Number(collection[collection.length - lenOfCollection / 2]);
    let median = Math.round((upperMedian + lowerMedian) / 2);
    return transferToLetter(median);
}

function transferToLetter(number) {
    if (number <= 26) {
        return String.fromCharCode(number + 96);
    } else {
        return String.fromCharCode((number - 1) / 26 + 96) + String.fromCharCode((number - 1) % 26 + 97);
    }
}
module.exports = median_to_letter;