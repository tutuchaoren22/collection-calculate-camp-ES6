'use strict';

function double_to_one(collection) {
    var oneDimensional = flattenToOneDimensional(collection);
    return oneDimensional;
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

module.exports = double_to_one;