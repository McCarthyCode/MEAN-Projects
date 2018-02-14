function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function () {
        console.log("My ninja name is " + this.name + "!");
    }

    this.showStats = function () {
        console.log("Health:   " + this.health);
        console.log("Speed:    " + speed);
        console.log("Strength: " + strength);
    }

    this.drinkSake = function() {
        this.health += 10;
    }

    this.punch = function (ninja) {
        ninja.health -= 5;
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health!`);
    }

    this.kick = function (ninja) {
        ninja.health -= 5;
        console.log(`${ninja.name} was kicked by ${this.name} and lost 15 Health!`);
    }
}

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
