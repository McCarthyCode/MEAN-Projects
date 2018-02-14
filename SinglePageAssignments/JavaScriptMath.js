function zeroNegativity(array) {
    array.forEach(element => {
        if (element < 0)
            return false;
    });
    return true;
}

function isEven(number) {
    return number % 2 ? false : true;
}

function howManyEven(array) {
    var count = 0;
    array.forEach(element => {
        if (isEven(element))
            count++;
    });
    return count;
}

function createDummyArray(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * 10));
    }
    return result;
}

function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
}
