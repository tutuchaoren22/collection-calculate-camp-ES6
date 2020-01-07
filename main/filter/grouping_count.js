'use strict';

function grouping_count(collection) {
    let groupCount = {};
    let i;
    const len = collection.length;
    for (i = 0; i < len; i++) {
        if (collection[i] in groupCount) {
            groupCount[collection[i]]++;
        } else {
            groupCount[collection[i]] = 1;
        }
    }
    return groupCount;
}

module.exports = grouping_count;