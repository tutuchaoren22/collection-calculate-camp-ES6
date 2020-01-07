'use strict';
let even_asc_odd_desc = function(collection) {
    let evenElements = selectEven(collection);
    let oddElements = selectOdd(collection);
    evenElements.sort(ascendingOrder);
    oddElements.sort(deascendingOrder);
    let newSortElements = evenElements.concat(oddElements);
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