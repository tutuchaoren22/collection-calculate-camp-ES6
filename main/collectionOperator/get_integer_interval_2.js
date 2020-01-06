'use strict';

function get_integer_interval_2(number_a, number_b) {
    if (number_a < number_b) {
        return increaseInterval(number_a, number_b);
    } else if (number_a > number_b) {
        return decreaseInterval(number_a, number_b);
    } else {
        return sameIntervavl(number_a);
    }
}

function increaseInterval(number_a, number_b) {
    var resultInterval = [];
    for (var i = number_a; i <= number_b; i++) {
        evenAdd(resultInterval, i);
    }
    return resultInterval;
}

function decreaseInterval(number_a, number_b) {
    var resultInterval = [];
    for (var i = number_a; i >= number_b; i--) {
        evenAdd(resultInterval, i);
    }
    return resultInterval;
}

function sameIntervavl(number) {
    if (number % 2 === 0) {
        return [number];
    } else {
        return [];
    }
}

function evenAdd(array, number) {
    if (number % 2 === 0) {
        array.push(number);
    }
}

module.exports = get_integer_interval_2;