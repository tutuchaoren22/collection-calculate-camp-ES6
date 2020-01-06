function create_updated_collection(collection_a, object_b) {
    var itemToDecrease = object_b.value;
    for (var i in itemToDecrease) {
        var item = itemToDecrease[i];
        for (var j = 0; j < collection_a.length; j++) {
            if (item === collection_a[j].key) {
                var numberToDecrease = parseInt(collection_a[j].count / 3);
                collection_a[j].count -= numberToDecrease;
                break;
            }
        }
    }
    return collection_a;
}

module.exports = create_updated_collection;