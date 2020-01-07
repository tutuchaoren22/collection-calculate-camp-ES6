'use strict';

function get_letter_interval(number_a, number_b) {
    if (number_a < number_b) {
        return increaseInterval(number_a, number_b);
    } else if (number_a > number_b) {
        return decreaseInterval(number_a, number_b);
    } else {
        return [String.fromCharCode(number_a + 96)];
    }
}

function increaseInterval(number_a, number_b) {
    let resultInterval = [];
    let i;
    for (i = number_a; i <= number_b; i++) {
        resultInterval.push(String.fromCharCode(i + 96));
    }
    return resultInterval;
}

function decreaseInterval(number_a, number_b) {
    let resultInterval = [];
    let i;
    for (i = number_a; i >= number_b; i--) {
        resultInterval.push(String.fromCharCode(i + 96));
    }
    return resultInterval;
}

module.exports = get_letter_interval;