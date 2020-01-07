'use strict';

function calculate_average(collection) {
    let oddIndexElements = findOddIndexElements(collection);
    let sum = computeSum(oddIndexElements);
    let averageNumber = computeAvg(sum, oddIndexElements.length);
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
    let sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

function computeAvg(sum, num) {
    return sum / num;
}

module.exports = calculate_average;