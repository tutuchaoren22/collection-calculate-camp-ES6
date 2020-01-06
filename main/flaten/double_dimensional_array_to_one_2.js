'use strict';

function double_to_one(collection) {
    var oneDimensional = flattenToOneDimensional(collection);
    var deduplicationOneDimensional = deduplication(oneDimensional);
    return deduplicationOneDimensional;
}

function flattenToOneDimensional(arr, result = []) {
    for (let item of arr) {
        if (Array.isArray(item))
            flattenToOneDimensional(item, result);
        else
            result.push(item);
    }
    return result;
}

function deduplication(array) {
    return array.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}
module.exports = double_to_one;