'use strict';

function even_group_calculate_average(collection) {
    var oddIndexElements = findOddIndexElements(collection);
    var evenElements = selectEven(oddIndexElements);
    if (evenElements.length === 0) {
        return [0];
    } else {
        var arrayGroupByDigit = groupByDigit(evenElements);
        var averageNumber = computeArrayAvg(arrayGroupByDigit);
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
    var collection1Digit = selectByDigit(collection, 1);
    var collection2Digit = selectByDigit(collection, 2);
    var collection3Digit = selectByDigit(collection, 3);
    return [collection1Digit, collection2Digit, collection3Digit];
}

function selectByDigit(collection, num) {
    return collection.filter(item => item.toString().length === num);
}

function computeArrayAvg(collection) {
    var avg = [];
    for (var i in collection) {
        if (collection[i].length) {
            var average = computeAvg(collection[i]);
            avg.push(average);
        }
    }
    return avg;
}

function computeAvg(collection) {
    var sum = computeSum(collection);
    var num = collection.length;
    return sum / num;
}


function computeSum(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

module.exports = even_group_calculate_average;