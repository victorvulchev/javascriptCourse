function task(input){
    let people = {};
    while(input.length != 0){
        let current = input.shift().split(": ");
        let[name, cards] = current;
        cards = cards.split(", ")
        if(name in people){
            let allCards = people[name].concat(cards);
            let uniqueCards = new Set(allCards);
            let hand = Array.from(uniqueCards);
            people[name] = hand;
        }
        else{
            people[name] = cards;
        }
    }
    for(let [key, value] of Object.entries(people)){
        let sum = 0;
        while(value.length != 0){
            let card = value.shift().split("");
            let type = card.pop();
            let numb = card.join("");
            switch(numb){
                case"J": numb = 11; break;
                case"Q": numb = 12; break;
                case"K": numb = 13; break;
                case"A": numb = 14; break;
                default: numb = Number(numb);
            }
            switch(type){
                case"S": type = 4; break;
                case"H": type = 3; break;
                case"D": type = 2; break;
                case"C": type = 1; break;
            }
            sum += numb * type;
            
        }
        people[key] = sum;

    }

    for(let [key, value] of Object.entries(people)){
        console.log(`${key}: ${value}`)
    }
    
}
//J, Q, K, A
task([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])

    /*while(input.length != 0){
        let current = input.shift().split(": ");
        let[name, cards] = current;
        cards = cards.split(", ");
        let uniqueCards = new Set(cards);
        let hand = Array.from(uniqueCards);
        let sum = 0;
        while(hand.length != 0){
            let card = hand.shift().split("");
            let [numb, type] = card;
            switch(numb){
                case"J": numb = 11; break;
                case"Q": numb = 12; break;
                case"K": numb = 13; break;
                case"A": numb = 14; break;
                default: numb = Number(numb);
            }
            switch(type){
                case"S": type = 4; break;
                case"H": type = 3; break;
                case"D": type = 2; break;
                case"C": type = 1; break;
            }
            sum += numb * type;
            
        }
        people[name] = sum;
        
    }
    for(let [key, value] of Object.entries(people)){
        console.log(`${key}: ${value}`)
    } */
