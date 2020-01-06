'use strict';
var number_map_to_word_over_26 = function(collection) {
    var mapWord = collection.map(item => transferToLetter(item));
    return mapWord;
};

function transferToLetter(number) {
    if (number <= 26) {
        return String.fromCharCode(number + 96);
    } else {
        return String.fromCharCode((number - 1) / 26 + 96) + String.fromCharCode((number - 1) % 26 + 97);
    }
}
module.exports = number_map_to_word_over_26;