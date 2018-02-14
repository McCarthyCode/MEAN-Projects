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
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
