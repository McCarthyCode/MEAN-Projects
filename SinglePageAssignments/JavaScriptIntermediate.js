function starString(num, letter) {
    var result = "";
    letter = letter || "*";
    for (var i = 0; i < num; i++) {
        result += letter;
    }
    return result;
}

function drawStars(array) {
    array.forEach(element => {
        if (element.constructor === String) {
            console.log(starString(element.length, element[0].toLowerCase()));
        } else {
            console.log(starString(element));
        }
    });
}

let stars = starString(8);
// console.log(stars);

// let x = [4, 6, 1, 3, 5, 7, 25];
let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStars(x);
