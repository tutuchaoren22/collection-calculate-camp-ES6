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
    var itemCount = item.split(/-|\[|\]|:/);
    item = itemCount[0];
    itemCount = Number(itemCount[1]);
    if (countSameElements[lengthOfElements - 1].name === item) {
        countSameElements[lengthOfElements - 1].summary += itemCount || 1;
    } else {
        addToElement(item, sameElements, countSameElements, itemCount)
    }
}

function addToElement(item, sameElements, countSameElements, itemCount) {
    sameElements.name = item;
    sameElements.summary = itemCount || 1;
    countSameElements.push(sameElements);
}

module.exports = count_same_elements;