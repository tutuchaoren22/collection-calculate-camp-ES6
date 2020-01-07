function create_updated_collection(collection_a, object_b) {
    let itemToDecrease = object_b.value;
    for (var i in itemToDecrease) {
        let item = itemToDecrease[i];
        for (let j = 0; j < collection_a.length; j++) {
            if (item === collection_a[j].key) {
                let numberToDecrease = parseInt(collection_a[j].count / 3);
                collection_a[j].count -= numberToDecrease;
                break;
            }
        }
    }
    return collection_a;
}

module.exports = create_updated_collection;