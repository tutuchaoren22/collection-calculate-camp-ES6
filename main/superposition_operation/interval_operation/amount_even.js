'use strict';

function amount_even(collection) {
    var findEvenCollection = findEvenInCollection(collection);
    var sum = sumOperation(findEvenCollection);
    return sum;
}

function findEvenInCollection(collection) {
    return collection.filter(item => item % 2 === 0);
}

function sumOperation(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}
module.exports = amount_even;