function deck(cards){
    function makeCard(face, suit){
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = "SHDC"
        if(!faces.includes(face) || !suits.includes(suit)){
            throw Error(`Invalid card: ${face}${suit}`);
        }
        let utfCode = "";
        switch(suit){
            case"S": utfCode = "\u2660"; break;
            case"H": utfCode = "\u2665"; break;
            case"D": utfCode = "\u2666"; break;
            case"C": utfCode = "\u2663"; break;
        }
        return {
            face: face,
            suit: utfCode,
            toString: function () {
                return `${face}${utfCode}`;
            }
        };
    }

    let myDeck = [];

    for(let card of cards){
        let [face, suit] = card.split("");
        if(card.length >2){
            face = "10";
            suit = card[2];
        }
        let toAdd = makeCard(face, suit).toString();
        myDeck.push(toAdd);
    }
    return myDeck.join(" ");
}

let mydeck = deck(['AS', '10D', 'KH', '2C']);
console.log(mydeck)