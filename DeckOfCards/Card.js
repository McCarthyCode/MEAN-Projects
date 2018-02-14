class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }

    faceValue() {
        return `${this.value} of ${this.suit}`;
    }
}
