'use strict';

function get_integer_interval(number_a, number_b) {
    if (number_a < number_b) {
        return increaseInterval(number_a, number_b);
    } else if (number_a > number_b) {
        return decreaseInterval(number_a, number_b);
    } else {
        return [number_a];
    }
}

function increaseInterval(number_a, number_b) {
    var resultInterval = [];
    for (var i = number_a; i <= number_b; i++) {
        resultInterval.push(i);
    }
    return resultInterval;
}

function decreaseInterval(number_a, number_b) {
    var resultInterval = [];
    for (var i = number_a; i >= number_b; i--) {
        resultInterval.push(i);
    }
    return resultInterval;
}

module.exports = get_integer_interval;