'use strict';

function find_first_even(collection) {
    const evenAll = findAllEven(collection);
    const firstEven = findFirstEven(evenAll);
    return firstEven;
}

function findAllEven(collection) {
    return collection.filter(item => (item % 2 === 0));
}

function findFirstEven(collection) {
    return collection[0];
}
module.exports = find_first_even;