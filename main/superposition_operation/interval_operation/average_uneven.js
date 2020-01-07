'use strict';

function average_uneven(collection) {
    let oddNumber = findOddNumber(collection);
    let sum = computeSum(oddNumber);
    let averageNumber = computeAvg(sum, oddNumber.length);
    return averageNumber;
}

function findOddNumber(collection) {
    let oddNumber = collection.filter(x => (x % 2 !== 0));
    return oddNumber;
}

function computeSum(collection) {
    let sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

function computeAvg(sum, num) {
    return sum / num;
}
module.exports = average_uneven;