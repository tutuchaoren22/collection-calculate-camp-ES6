'use strict';

function one_add_next_multiply_three(collection) {
    var newCollection = [];
    for (var i = 0; i < collection.length - 1; i++) {
        var newElement = 3 * (collection[i] + collection[i + 1]);
        newCollection.push(newElement);
    }
    return newCollection;
}
module.exports = one_add_next_multiply_three;