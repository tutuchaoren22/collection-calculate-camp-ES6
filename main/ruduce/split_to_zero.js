'use strict';

function split_to_zero(number, interval) {
    let infiniteDivision = [];
    while (number > Number.EPSILON) {
        infiniteDivision.push(number);
        number = parseFloat((number - interval).toFixed(1));
    }
    infiniteDivision.push(number);
    return infiniteDivision;
}
module.exports = split_to_zero;