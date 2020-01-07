'use strict';

function even_to_letter(collection) {

    let evenInCollection = findEvenInCollection(collection);
    let evenToLetter = transferEvenToLetter(evenInCollection);
    return evenToLetter;
}

function findEvenInCollection(collection) {
    return collection.filter(item => item % 2 === 0);
}

function transferEvenToLetter(collection) {
    return collection.map(item => String.fromCharCode(0x60 + item));
}
module.exports = even_to_letter;