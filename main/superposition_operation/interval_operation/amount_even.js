'use strict';

function amount_even(collection) {
    let findEvenCollection = findEvenInCollection(collection);
    let sum = sumOperation(findEvenCollection);
    return sum;
}

function findEvenInCollection(collection) {
    return collection.filter(item => item % 2 === 0);
}

function sumOperation(collection) {
    let sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}
module.exports = amount_even;