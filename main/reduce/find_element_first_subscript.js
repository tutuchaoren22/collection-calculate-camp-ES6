'use strict';

function find_element_first_subscript(collection, element) {
    var index;
    for (var i = 0; i < collection.length; i++) {
        if (element === collection[i]) {
            index = i;
            break;
        }
    }
    return index;
}

module.exports = find_element_first_subscript;