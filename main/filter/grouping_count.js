'use strict';

function grouping_count(collection) {
    var groupCount = {};
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] in groupCount) {
            groupCount[collection[i]]++;
        } else {
            groupCount[collection[i]] = 1;
        }
    }
    return groupCount;
}

module.exports = grouping_count;