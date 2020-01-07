function collect_same_elements(collection_a, object_b) {
    const newCollection_a = findKeyValue(collection_a);
    const newCollection_b = object_b.value;
    return findSameElement(newCollection_a, newCollection_b);
}

function findKeyValue(collection_a) {
    let keyValue = [];
    for (let i of collection_a) {
        keyValue.push(i.key);
    }
    return keyValue;
}


function findSameElement(collection_a, collection_b) {
    return collection_a.filter(item => collection_b.includes(item));
}

module.exports = collect_same_elements;