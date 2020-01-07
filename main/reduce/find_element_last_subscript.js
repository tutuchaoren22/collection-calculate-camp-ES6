'use strict';

function find_element_last_subscript(collection, element) {
    let index;
    let i;
    const len = collection.length;
    for (i = len; i > 0; i--) {
        if (element === collection[i]) {
            index = i;
            break;
        }
    }
    return index;
}

module.exports = find_element_last_subscript;