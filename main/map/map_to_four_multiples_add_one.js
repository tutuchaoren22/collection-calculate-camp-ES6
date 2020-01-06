'use strict';
var map_to_four_multiples_add_one = function(collection) {
    var mapFourMmultiplesAddOne = collection.map(item => item * 4 + 1);
    return mapFourMmultiplesAddOne;
};

module.exports = map_to_four_multiples_add_one;