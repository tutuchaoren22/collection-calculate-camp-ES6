'use strict';
var even_asc_odd_desc = function(collection) {
    var evenElements = selectEven(collection);
    var oddElements = selectOdd(collection);
    evenElements.sort(ascendingOrder);
    oddElements.sort(deascendingOrder);
    var newSortElements = evenElements.concat(oddElements);
    return newSortElements;
};

function selectEven(collection) {
    return collection.filter(item => (item % 2 === 0));
}

function selectOdd(collection) {
    return collection.filter(item => (item % 2 !== 0));
}

function ascendingOrder(x, y) {
    return x - y;
}

function deascendingOrder(x, y) {
    return y - x;
}


module.exports = even_asc_odd_desc;