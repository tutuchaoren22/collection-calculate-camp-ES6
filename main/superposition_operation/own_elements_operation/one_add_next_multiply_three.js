'use strict';

function one_add_next_multiply_three(collection) {
    let newCollection = [];
    for (let i = 0; i < collection.length - 1; i++) {
        let newElement = 3 * (collection[i] + collection[i + 1]);
        newCollection.push(newElement);
    }
    return newCollection;
}
module.exports = one_add_next_multiply_three;