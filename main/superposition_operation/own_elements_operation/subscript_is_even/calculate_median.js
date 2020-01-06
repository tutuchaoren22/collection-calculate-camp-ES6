'use strict';
var calculate_median = function(collection) {
    var oddIndexElements = findOddIndexElements(collection);
    var medianOddIndex = medianNumber(oddIndexElements);
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
    var len = (collection.length % 2 === 0) ? collection.length : collection.length + 1;
    var upperMedian = Number(collection[len / 2 - 1]);
    var lowerMedian = Number(collection[collection.length - len / 2]);
    return (upperMedian + lowerMedian) / 2;
}
module.exports = calculate_median;