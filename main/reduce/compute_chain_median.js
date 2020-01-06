'use strict';

function compute_chain_median(collection) {
    var chainArray = chainToArray(collection);
    var median = computeMedian(chainArray);
    return median;
}

function chainToArray(chain) {
    return chain.split('->').sort(ascendingOrder);
}

function ascendingOrder(x, y) {
    return x - y;
}

function computeMedian(array) {
    var len = (array.length % 2 === 0) ? array.length : array.length + 1;
    var upperMedian = Number(array[len / 2 - 1]);
    var lowerMedian = Number(array[array.length - len / 2]);
    return (upperMedian + lowerMedian) / 2;
}
module.exports = compute_chain_median;