'use strict';
var map_to_three_multiples = function(collections) {
    var mapThreeMultiples = collections.map(item => item * 3);
    return mapThreeMultiples;
};

module.exports = map_to_three_multiples;