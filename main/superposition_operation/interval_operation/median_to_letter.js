'use strict';

function median_to_letter(collection) {
    var lenOfCollection = (collection.length % 2 === 0) ? collection.length : collection.length + 1;
    var upperMedian = Number(collection[lenOfCollection / 2 - 1]);
    var lowerMedian = Number(collection[collection.length - lenOfCollection / 2]);
    var median = Math.round((upperMedian + lowerMedian) / 2);
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