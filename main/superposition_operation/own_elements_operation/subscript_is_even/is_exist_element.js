'use strict';
var is_exist_element = function(collection, element) {
    var oddIndexElements = findOddIndexElements(collection);
    return hasElement(oddIndexElements, element);
};

function findOddIndexElements(collection) {
    return collection.filter(function(element, index) {
        if (index % 2 === 0) {
            return element;
        }
    });
}

function hasElement(collection, element) {
    return collection.indexOf(element) !== -1;
}
module.exports = is_exist_element;