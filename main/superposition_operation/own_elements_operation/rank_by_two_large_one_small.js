'use strict';

function rank_by_two_large_one_small(collection) {
    let sortCollection = collection.sort(ascendingOrder);
    let rankByCollection = sortCollection.slice();
    for (let i = 0; i < collection.length - 2; i += 3) {
        rankByCollection[i] = collection[i + 1];
        rankByCollection[i + 1] = collection[i + 2];
        rankByCollection[i + 2] = collection[i];
    }
    return rankByCollection;
}

function ascendingOrder(x, y) {
    return x - y;
}

module.exports = rank_by_two_large_one_small;