'use strict';

function get_letter_interval_2(number_a, number_b) {
    if (number_a < number_b) {
        return increaseInterval(number_a, number_b);
    } else if (number_a > number_b) {
        return decreaseInterval(number_a, number_b);
    } else {
        return [transferToLetter(number_a)];
    }
}

function increaseInterval(number_a, number_b) {
    let resultInterval = [];
    let i;
    for (i = number_a; i <= number_b; i++) {
        resultInterval.push(transferToLetter(i));
    }
    return resultInterval;
}

function decreaseInterval(number_a, number_b) {
    let resultInterval = [];
    let i;
    for (i = number_a; i >= number_b; i--) {
        resultInterval.push(transferToLetter(i));
    }
    return resultInterval;
}

function transferToLetter(number) {
    if (number <= 26) {
        return String.fromCharCode(number + 96);
    } else {
        return String.fromCharCode((number - 1) / 26 + 96) + String.fromCharCode((number - 1) % 26 + 97);
    }
}
module.exports = get_letter_interval_2;