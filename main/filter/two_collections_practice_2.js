'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var aNotIncludeB = differentElements(collection_a, collection_b)
    var bNotIncludeA = differentElements(collection_b, collection_a)
    return aNotIncludeB.concat(bNotIncludeA);
}

function differentElements(collection_a, collection_b) {
    var diffElements = collection_a.filter(
        function(item) {
            if (collection_b.indexOf(item) === -1) {
                return item;
            }
        }
    );
    return diffElements;
}
module.exports = choose_no_common_elements;