var math = require('./mathlib')();

console.log(math.add(2, 3));
console.log(math.multiply(3, 5));
console.log(math.square(5));

// test the random function a million times
// and find the minimum and maximum values
// to test the output's boundries
var array = [];
for (var i = 0; i < 1000000; i++) {
    array.push(math.random(1, 35));
}
array.sort((a,b) => a - b);

console.log(array[0]);
console.log(array[999999]);
