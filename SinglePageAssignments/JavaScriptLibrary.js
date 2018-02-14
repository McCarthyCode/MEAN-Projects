var _ = {
    map: function(array, callback) {
        let result = [];
        array.forEach(element => {
            result.push(callback(element));
        });
        return result;
    },
    reduce: function(array, callback, memo) {
        memo = memo || 0;
        for (let i in array) {
            memo = callback(memo, array[i]);
        }
        return memo;
    },
    find: function(array, callback) {
        for (let i in array) {
            if (callback(array[i])) {
                return array[i];
            }
        }
        return undefined;
    },
    filter: function(array, callback) {
        let result = [];
        array.forEach(element => {
            if (callback(element))
                result.push(element);
        });
        return result;
    },
    reject: function(array, callback) {
        let result = [];
        array.forEach(element => {
            if (!callback(element))
                result.push(element);
        });
        return result;
    }
};

let multiples = _.map([1, 2, 3], num => num * 3);
let sum = _.reduce([1, 2, 3, 4, 5, 6], (a, b) => a + b);
let even = _.find([1, 2, 3, 4, 5, 6], num => num % 2 == 0);
let evens = _.filter([1, 2, 3, 4, 5, 6], num => num % 2 == 0);
let odds = _.reject([1, 2, 3, 4, 5, 6], num => num % 2 == 0 );

console.log(multiples);
console.log(sum);
console.log(even);
console.log(evens);
console.log(odds);
