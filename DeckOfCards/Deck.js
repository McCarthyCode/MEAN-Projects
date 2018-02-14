class Deck {
    constructor() {
        this.reset();
    }

    reset() {
        this.cards = [];

        var ranks = {"Two": "2", "Three": "3", "Four": "4", "Five": "5", "Six": "6", "Seven": "7", "Eight": "8", "Nine": "9", "Ten": "10", "Jack": "j", "Queen": "q", "King": "k", "Ace": 1};
        var suits = {"Hearts": "h", "Clubs": "c", "Diamonds": "d", "Spades": "s"};
        var values = {"Two": 2, "Three": 3, "Four": 4, "Five": 5, "Six": 6, "Seven": 7, "Eight": 8, "Nine": 9, "Ten": 10, "Jack": 10, "Queen": 10, "King": 10, "Ace": 11};

        for (var suit in suits) {
            for (var value in ranks) {
                this.cards.push(new Card(ranks[value], suits[suit], values[value]));
            }
        }
    }

    shuffle() {
        var m = this.cards.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = this.cards[m];
            this.cards[m] = this.cards[i];
            this.cards[i] = t;
        }
    }

    deal() {
        function remove(array, element) {
            return array.filter(e => e !== element);
        }
        
        var index = Math.floor(Math.random() * this.cards.length);
        var card = this.cards[index];

        this.cards = remove(this.cards, card);

        return card;
    }

    size() {
        return this.cards.length;
    }

    show() {
        var string = "";
        this.cards.forEach(element => {
            string += element.faceValue() + " ";
        });
        console.log(string);
    }
}
