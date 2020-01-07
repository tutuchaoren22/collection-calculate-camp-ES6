function count_same_elements(collection) {
    let countSameElements = [];
    let i;
    const len = collection.length;
    for (i = 0; i < len; i++) {
        let sameElements = {};
        const item = collection[i];
        const lengthOfElements = countSameElements.length;
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
    if (item.length === 1) {
        sameElements.key = item;
        sameElements.count = 1;
        countSameElements.push(sameElements);
    } else {
        let itemCount = item.split('-');
        sameElements.key = itemCount[0];
        sameElements.count = Number(itemCount[1]);
        countSameElements.push(sameElements);
    }

}


module.exports = count_same_elements;