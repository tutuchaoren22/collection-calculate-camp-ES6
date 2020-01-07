'use strict';
var calculate_median = function(collection) {
    let oddIndexElements = findOddIndexElements(collection);
    let medianOddIndex = medianNumber(oddIndexElements);
    return medianOddIndex;

};

function findOddIndexElements(collection) {
    return collection.filter(function(element, index) {
        if (index % 2 !== 0) {
            return element;
        }
    });
}

function medianNumber(collection) {
    let len = (collection.length % 2 === 0) ? collection.length : collection.length + 1;
    let upperMedian = Number(collection[len / 2 - 1]);
    let lowerMedian = Number(collection[collection.length - len / 2]);
    return (upperMedian + lowerMedian) / 2;
}
module.exports = calculate_median;