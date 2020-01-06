function count_same_elements(collection) {
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

module.exports = count_same_elements;