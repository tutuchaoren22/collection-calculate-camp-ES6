function create_updated_collection(collection_a, object_b) {
    let itemToDecrease = object_b.value;
    for (let i in itemToDecrease) {
        let item = itemToDecrease[i];
        for (let j = 0; j < collection_a.length; j++) {
            if (item === collection_a[j].key) {
                collection_a[j].count -= 1;
                break;
            }
        }
    }
    return collection_a;

}

module.exports = create_updated_collection;