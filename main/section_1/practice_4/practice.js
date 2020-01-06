function collect_same_elements(collection_a, object_b) {
    var newCollection_a = findKeyValue(collection_a);
    var newCollection_b = object_b.value;
    return findSameElement(newCollection_a, newCollection_b);
}

function findKeyValue(collection_a) {
    var keyValue = [];
    for (var i in collection_a) {
        keyValue.push(collection_a[i].key);
    }
    return keyValue;
}


function findSameElement(collection_a, collection_b) {
    return collection_a.filter(item => collection_b.includes(item));
}

module.exports = collect_same_elements;