'use strict';
var single_element = function(collection) {
    var oddIndexElements = findOddIndexElements(collection);
    var singleElements = deduplication(oddIndexElements);
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
    var singleCollection = [];
    for (var i in collection) {
        if (collection.indexOf(collection[i]) === collection.lastIndexOf(collection[i])) {
            singleCollection.push(collection[i]);
        }
    }
    return singleCollection;

}
module.exports = single_element;