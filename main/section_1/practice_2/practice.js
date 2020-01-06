function collect_same_elements(collection_a, collection_b) {
    return findSameElement(collection_a, collection_b[0]);
}

function findSameElement(collection_a, collection_b) {
    return collection_a.filter(item => collection_b.includes(item));
}
module.exports = collect_same_elements;