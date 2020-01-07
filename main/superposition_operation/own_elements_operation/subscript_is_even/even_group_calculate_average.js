'use strict';

function even_group_calculate_average(collection) {
    let oddIndexElements = findOddIndexElements(collection);
    let evenElements = selectEven(oddIndexElements);
    if (evenElements.length === 0) {
        return [0];
    } else {
        let arrayGroupByDigit = groupByDigit(evenElements);
        let averageNumber = computeArrayAvg(arrayGroupByDigit);
        return averageNumber;
    }
};

function findOddIndexElements(collection) {
    return collection.filter(function(element, index) {
        if (index % 2 !== 0) {
            return element;
        }
    });
}

function selectEven(collection) {
    return collection.filter(item => (item % 2 === 0));
}

function groupByDigit(collection) {
    let collection1Digit = selectByDigit(collection, 1);
    let collection2Digit = selectByDigit(collection, 2);
    let collection3Digit = selectByDigit(collection, 3);
    return [collection1Digit, collection2Digit, collection3Digit];
}

function selectByDigit(collection, num) {
    return collection.filter(item => item.toString().length === num);
}

function computeArrayAvg(collection) {
    let avg = [];
    for (let i in collection) {
        if (collection[i].length) {
            let average = computeAvg(collection[i]);
            avg.push(average);
        }
    }
    return avg;
}

function computeAvg(collection) {
    let sum = computeSum(collection);
    let num = collection.length;
    return sum / num;
}


function computeSum(collection) {
    let sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

module.exports = even_group_calculate_average;