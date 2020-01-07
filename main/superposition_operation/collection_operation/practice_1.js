'use strict';

function hybrid_operation(collection) {
    let afterMultiplyThreeAddTwo = multiplyThreeAddTwo(collection);
    let sum = sumOperation(afterMultiplyThreeAddTwo);
    return sum;
}

function multiplyThreeAddTwo(collection) {
    let afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 2));
    return afterMultiplyThreeAddTwo;
}

function sumOperation(collection) {
    let sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

module.exports = hybrid_operation;