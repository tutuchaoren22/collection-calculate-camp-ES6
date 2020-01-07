'use strict';

function compute_chain_median(collection) {
    const chainArray = chainToArray(collection);
    const median = computeMedian(chainArray);
    return median;
}

function chainToArray(chain) {
    return chain.split('->').sort(ascendingOrder);
}

function ascendingOrder(x, y) {
    return x - y;
}

function computeMedian(array) {
    const len = (array.length % 2 === 0) ? array.length : array.length + 1;
    const upperMedian = Number(array[len / 2 - 1]);
    const lowerMedian = Number(array[array.length - len / 2]);
    return (upperMedian + lowerMedian) / 2;
}
module.exports = compute_chain_median;