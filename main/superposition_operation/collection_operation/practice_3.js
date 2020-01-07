'use strict';

function hybrid_operation_to_uneven(collection) {
    let oddNumber = findOddNumber(collection);
    let afterMultiplyThreeAddTwo = multiplyThreeAddTwo(oddNumber);
    let sum = sumOperation(afterMultiplyThreeAddTwo);
    return sum;
}

function findOddNumber(collection) {
    let oddNumber = collection.filter(x => (x % 2 !== 0));
    return oddNumber;
}

function multiplyThreeAddTwo(collection) {
    let afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 5));
    return afterMultiplyThreeAddTwo;
}

function sumOperation(collection) {
    let sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}
module.exports = hybrid_operation_to_uneven;