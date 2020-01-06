'use strict';

function average_to_letter(collection) {
    var sum = computeSum(collection);
    var averageNumber = computeAvg(sum, collection.length);
    var numberToLetter = transferEvenToLetter(averageNumber);
    return numberToLetter;
}

function computeSum(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

function computeAvg(sum, num) {
    return Math.ceil(sum / num);
}

function transferEvenToLetter(number) {
    return String.fromCharCode(0x60 + number);
}

module.exports = average_to_letter;