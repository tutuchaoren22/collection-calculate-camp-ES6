'use strict';

function collect_max_number(collection) {
    // 方法一：使用Math中的max方法；
    // var maxNumber = Math.max.apply(Math, collection);
    // 方法一：使用for循环寻找最大值；
    var maxNumber = collection[0];
    for (var i = 1; i < collection.length; i++) {
        if (maxNumber < collection[i])
            maxNumber = collection[i];
    }
    return maxNumber;
}
module.exports = collect_max_number;