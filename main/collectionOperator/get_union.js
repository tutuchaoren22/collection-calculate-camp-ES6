'use strict';

function get_union(collection_a, collection_b) {
    var diffElements = findDifferentElements(collection_a, collection_b);
    return collection_a.concat(diffElements);
}

function findDifferentElements(collection_a, collection_b) {
    return collection_b.filter(function(v) {
        return collection_a.indexOf(v) === -1
    })
}

module.exports = get_union;