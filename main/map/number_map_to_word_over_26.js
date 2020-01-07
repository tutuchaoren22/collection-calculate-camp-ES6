'use strict';
var number_map_to_word_over_26 = function(collection) {
    return collection.map(item => transferToLetter(item));
};

function transferToLetter(number) {
    if (number <= 26) {
        return String.fromCharCode(number + 96);
    } else {
        return String.fromCharCode((number - 1) / 26 + 96) + String.fromCharCode((number - 1) % 26 + 97);
    }
}
module.exports = number_map_to_word_over_26;