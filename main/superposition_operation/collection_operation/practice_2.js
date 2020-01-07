'use strict';

function hybrid_operation_to_uneven(collection) {
    let oddNumber = findOddNumber(collection);
    let afterMultiplyThreeAddTwo = multiplyThreeAddTwo(oddNumber);
    return afterMultiplyThreeAddTwo;
}

function findOddNumber(collection) {
    let oddNumber = collection.filter(x => (x % 2 !== 0));
    return oddNumber;
}

function multiplyThreeAddTwo(collection) {
    let afterMultiplyThreeAddTwo = collection.map(item => (item * 3 + 2));
    return afterMultiplyThreeAddTwo;
}
module.exports = hybrid_operation_to_uneven;