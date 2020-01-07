'use strict';
var single_element = function(collection) {
    let oddIndexElements = findOddIndexElements(collection);
    let singleElements = deduplication(oddIndexElements);
    return singleElements;
};

function findOddIndexElements(collection) {
    return collection.filter(function(element, index) {
        if (index % 2 !== 0) {
            return element;
        }
    });
}


function deduplication(collection) {
    let singleCollection = [];
    for (let i in collection) {
        if (collection.indexOf(collection[i]) === collection.lastIndexOf(collection[i])) {
            singleCollection.push(collection[i]);
        }
    }
    return singleCollection;

}
module.exports = single_element;