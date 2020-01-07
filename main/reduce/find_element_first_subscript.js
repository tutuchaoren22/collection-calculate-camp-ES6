'use strict';

function find_element_first_subscript(collection, element) {
    let index;
    let i;
    const len = collection.length;
    for (i = 0; i < len; i++) {
        if (element === collection[i]) {
            index = i;
            break;
        }
    }
    return index;
}

module.exports = find_element_first_subscript;