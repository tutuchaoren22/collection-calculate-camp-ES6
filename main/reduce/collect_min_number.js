'use strict';

function collect_min_number(collection) {
    // 方法一：使用Math中的min方法；
    //  var minNumber = Math.min.apply(Math, collection);
    // 方法一：使用for循环寻找最大值；
    let minNumber = collection[0];
    let i;
    const len = collection.length;
    for (i = 1; i < len; i++) {
        if (minNumber > collection[i])
            minNumber = collection[i];
    }
    return minNumber;
}

module.exports = collect_min_number;