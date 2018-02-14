var x = [];
x.push("coding");
x.push("dojo");
x.push("rocks");
x.pop();
console.log(x); // [ 'coding', 'dojo' ]

const y = [];
console.log(y); // []
y.push(88);
console.log(y); // [ 88 ]

var z = [9, 10, 6, 5, -1, 20, 13, 2];
for (var i in z) {
    console.log(z[i]);
}
// 9
// 10
// 6
// 5
// -1
// 20
// 13
// 2
for (var i = 0; i < z.length - 1; i++) {
    console.log(z[i]);
}
// 9
// 10
// 6
// 5
// -1
// 20
// 13

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
if (names.length === 5)
    console.log(names.length); // 5

function yell(string) {
    console.log(string.toUpperCase() + "!!");
}
yell("Hello World!"); // HELLO WORLD!!!
