'use strict';

function hybrid_operation_to_uneven(collection) {
    var oddNumber = findOddNumber(collection);
    var afterMultiplyThreeAddTwo = multiplyThreeAddTwo(oddNumber);
    var sum = sumOperation(afterMultiplyThreeAddTwo);
    return sum;
}

function findOddNumber(collection) {
    var oddNumber = collection.filter(x => (x % 2 !== 0));
    return oddNumber;
}

function multiplyThreeAddTwo(collection) {
    var afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 5));
    return afterMultiplyThreeAddTwo;
}

function sumOperation(collection) {
    var sum = collection.reduce(function(x, y) {
        return x + y;
    });
    return sum;
}
module.exports = hybrid_operation_to_uneven;