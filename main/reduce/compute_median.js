'use strict';

function compute_median(collection) {
    collection.sort(ascendingOrder);
    const len = (collection.length % 2 === 0) ? collection.length : collection.length + 1;
    const upperMedian = Number(collection[len / 2 - 1]);
    const lowerMedian = Number(collection[collection.length - len / 2]);
    return (upperMedian + lowerMedian) / 2;
}

function ascendingOrder(x, y) {
    return x - y;
}

module.exports = compute_median;