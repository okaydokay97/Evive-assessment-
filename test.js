var breakfast = {
    1: 'Eggs',
    2: 'Toast',
    3: 'Coffee',
    3.5: 'Water'
};
var lunch = {
    1: 'Sandwich',
    2: 'Chips',
    3: 'Soda',
    3.5: 'Water'
};
var dinner = {
    1: 'Steak',
    2: 'Potatoes',
    3: 'Wine',
    3.5: 'Water',
    4: 'Cake'
};
function checkMissing(course, items) {
    var missing = [];
    if (!items.includes(1)) {
        missing.push("Main is missing");
    }
    if (!items.includes(2)) {
        missing.push("Side is missing");
    }
    if (!items.includes(3) || course === 'dinner') {
        items.push(3.5);
    }
    if (!items.includes(4) && course === 'dinner') {
        missing.push('Dessert is missing');
    }
    return missing.length > 0 ? "Unable to process: ".concat(missing.join(', ')) : null;
}
function returnOrder(course, items) {
    var normCourse = course.toLowerCase();
    var itemsOrdered = {};
    if (typeof checkMissing(normCourse, items) === 'string') {
        return checkMissing(normCourse, items);
    }
    items.sort();
    for (var i = 0; i < items.length; i++) {
        switch (normCourse) {
            case 'breakfast': {
                var bfFood = breakfast[items[i]];
                if (!itemsOrdered[bfFood]) {
                    itemsOrdered[bfFood] = 1;
                }
                else {
                    if (bfFood === 'coffee') {
                        itemsOrdered[bfFood] += 1;
                    }
                    else {
                        return "Unable to process: ".concat(bfFood, " cannot be ordered more than once");
                    }
                }
                break;
            }
            case 'lunch': {
                var lunFood = lunch[items[i]];
                if (!itemsOrdered[lunFood]) {
                    itemsOrdered[lunFood] = 1;
                }
                else {
                    if (lunFood === 'chips') {
                        itemsOrdered[lunFood] += 1;
                    }
                    else {
                        return "Unable to process: ".concat(lunFood, " cannot be ordered more than once");
                    }
                }
                break;
            }
            case 'dinner': {
                var dinFood = dinner[items[i]];
                if (!itemsOrdered[dinFood]) {
                    itemsOrdered[dinFood] = 1;
                }
                else {
                    return "Unable to process: ".concat(dinFood, " cannot be ordered more than once");
                }
                break;
            }
            default: {
                break;
            }
        }
    }
    var orderArr = [];
    for (var _i = 0, _a = Object.entries(itemsOrdered); _i < _a.length; _i++) {
        var _b = _a[_i], food = _b[0], quantity = _b[1];
        if (quantity > 1) {
            orderArr.push("".concat(food, "(").concat(quantity, ")"));
        }
        else {
            orderArr.push(food);
        }
    }
    return orderArr.join(' ');
}
console.log('1: ', returnOrder('Breakfast', [1, 2, 3]), '\n');
console.log('2: ', returnOrder('Breakfast', [2, 3, 1]), '\n');
console.log('3: ', returnOrder('breakfast', [1, 2, 3, 3, 3]), '\n');
console.log('4: ', returnOrder('breakfast', [1]), '\n');
console.log('5: ', returnOrder('lunch', [1, 2, 3]), '\n');
console.log('6: ', returnOrder('Lunch', [1, 2]), '\n');
console.log('7: ', returnOrder('Lunch', [1, 1, 2, 3]), '\n');
console.log('8: ', returnOrder('lunch', [1, 2, 2]), '\n');
console.log('9: ', returnOrder('lunch', []), '\n');
console.log('10: ', returnOrder('Dinner', [1, 2, 3, 4]), '\n');
console.log('11: ', returnOrder('dinner', [1, 2, 3]), '\n');
