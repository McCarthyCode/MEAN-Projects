console.log(hello);
var hello = 'world';

// expected output => world
// actual output => undefined

var needle = 'haystack';
test();

function test() {
    var needle = 'magnet';
    console.log(needle);
}

// expected output => magnet
// actual output => magnet

var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// expected output => super cool
// actual output => super cool

var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// expected output => chicken, half-chicken
// actual output => chicken, half-chicken

mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// expected output => chicken, fish, undefined, undefined
// actual output => TypeError: mean is not a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// expected output => undefined, rock, r&b, disco
// actual output => undefined, rock, r&b, disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// expected output => TypeError: dojo is not defined
// actual output => san jose, seattle, burbank, san jose
