function create_updated_collection(collection_a, object_b) {
    var collectionCount = computeCount(collection_a);
    var collectionUpdated = createUpdatedCollection(collectionCount, object_b)
    return collectionUpdated;
}

function computeCount(collection) {
    var countSameElements = [];
    for (var i = 0; i < collection.length; i++) {
        var sameElements = {};
        var item = collection[i];
        var lengthOfElements = countSameElements.length;
        if (lengthOfElements) {
            addToCount(item, lengthOfElements, sameElements, countSameElements);
        } else {
            addToElement(item, sameElements, countSameElements);

        }
    }
    return countSameElements;
}

function addToCount(item, lengthOfElements, sameElements, countSameElements) {
    if (countSameElements[lengthOfElements - 1].key === item) {
        countSameElements[lengthOfElements - 1].count += 1;
    } else {
        addToElement(item, sameElements, countSameElements)
    }
}

function addToElement(item, sameElements, countSameElements) {
    sameElements.key = item;
    sameElements.count = 1;
    countSameElements.push(sameElements);
}

function createUpdatedCollection(collection_a, object_b) {
    let itemToDecrease = object_b.value;
    for (let i in itemToDecrease) {
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