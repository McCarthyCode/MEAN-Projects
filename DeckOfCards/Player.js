class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    
    take(card) {
        this.hand.push(card);
    }

    discard(card) {
        this.hand = this.hand.filter(c => c !== card);
    }
}
