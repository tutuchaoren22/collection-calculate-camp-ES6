'use strict';

function calculate_average(collection) {
    var oddIndexElements = findOddIndexElements(collection);
    var sum = computeSum(oddIndexElements);
    var averageNumber = computeAvg(sum, oddIndexElements.length);
    return averageNumber;

};

function findOddIndexElements(collection) {
    return collection.filter(function(element, index) {
        if (index % 2 !== 0) {
            return element;
        }
    });
}

function computeSum(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

function computeAvg(sum, num) {
    return sum / num;
}

module.exports = calculate_average;