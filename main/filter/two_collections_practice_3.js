'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var divisibleElements = collection_a.filter(
        function(item) {
            var i;
            for (i in collection_b) {
                if (item % collection_b[i] === 0) {
                    return item;
                    break;
                }
            }
        }
    );
    return divisibleElements;
}
module.exports = choose_divisible_integer;