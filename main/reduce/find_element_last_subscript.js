'use strict';

function find_element_last_subscript(collection, element) {
    var index;
    for (var i = collection.length; i > 0; i--) {
        if (element === collection[i]) {
            index = i;
            break;
        }
    }
    return index;
}

module.exports = find_element_last_subscript;