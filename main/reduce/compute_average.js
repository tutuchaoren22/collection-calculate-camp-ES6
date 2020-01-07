'use strict';

function compute_average(collection) {
    // 方法一：利用for循环求和；
    // var sum = 0;
    // for (var i = 0; i < collection.length; i++) {
    //     sum += collection[i];
    // }
    // var averageNumber = sum / collection.length;

    // 方法二：利用reduce来累加求和；
    const sum = computeSum(collection);
    const averageNumber = computeAvg(sum, collection.length);
    return averageNumber;
}

function computeSum(collection) {
    const sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

function computeAvg(sum, num) {
    return sum / num;
}

module.exports = compute_average;