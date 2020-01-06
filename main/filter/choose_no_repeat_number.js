'use strict';

function choose_no_repeat_number(collection) {
    return collection.filter(
        function(value, index, self) {
            return self.indexOf(value) === index;
        }
    )
}

module.exports = choose_no_repeat_number;