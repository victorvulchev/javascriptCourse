function card(face, suit){
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = "SHDC"
    if(!faces.includes(face) || !suits.includes(suit)){
        throw Error("invalid face");
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
export {card}
/*· \u2660 – Spades (♠)

· \u2665 – Hearts (♥)

· \u2666 – Diamonds (♦)

· \u2663 – Clubs (♣)*/

let myCard = card("2", 'C')
console.log(myCard.toString());