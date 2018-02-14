class Bike {
    price: number;
    maxSpeed: string;
    miles: number;

    constructor(price: number, maxSpeed: string) {
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.miles = 0;
    }

    displayInfo() {
        console.log(`Price: $${this.price}`);
        console.log(`Max Speed: ${this.maxSpeed}`);
        console.log(`Miles: ${this.miles}`);
        return this;
    }
    ride() {
        console.log("Riding.");
        this.miles += 10;
        return this;
    }
    reverse() {
        console.log("Reversing.");
        this.miles = this.miles === 0 ? 0 : this.miles - 5;
        return this;
    }
}

let bikes = [
    new Bike(200, "25mph"),
    new Bike(200, "25mph"),
    new Bike(200, "25mph")
];

bikes[0]
    .ride()
    .ride()
    .ride()
    .reverse()
    .displayInfo();

bikes[1]
    .ride()
    .ride()
    .reverse()
    .reverse()
    .displayInfo();

bikes[2]
    .reverse()
    .reverse()
    .reverse()
    .displayInfo();
