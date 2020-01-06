'use strict';

function hybrid_operation(collection) {
    var afterMultiplyThreeAddTwo = multiplyThreeAddTwo(collection);
    var sum = sumOperation(afterMultiplyThreeAddTwo);
    return sum;
}

function multiplyThreeAddTwo(collection) {
    var afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 2));
    return afterMultiplyThreeAddTwo;
}

function sumOperation(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}

module.exports = hybrid_operation;