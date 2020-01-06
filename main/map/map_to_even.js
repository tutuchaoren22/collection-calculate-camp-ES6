'use strict';

function map_to_even(collection) {
    var mapDouble = collection.map(item => item * 2);
    return mapDouble;
}
module.exports = map_to_even;