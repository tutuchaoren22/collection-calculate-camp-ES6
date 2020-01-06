'use strict';

function hybrid_operation_to_uneven(collection) {
    var oddNumber = findOddNumber(collection);
    var afterMultiplyThreeAddTwo = multiplyThreeAddTwo(oddNumber);
    return afterMultiplyThreeAddTwo;
}

function findOddNumber(collection) {
    var oddNumber = collection.filter(x => (x % 2 !== 0));
    return oddNumber;
}

function multiplyThreeAddTwo(collection) {
    var afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 2));
    return afterMultiplyThreeAddTwo;
}
module.exports = hybrid_operation_to_uneven;