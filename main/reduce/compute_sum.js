'use strict';

function calculate_elements_sum(collection) {
    const sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

module.exports = calculate_elements_sum;