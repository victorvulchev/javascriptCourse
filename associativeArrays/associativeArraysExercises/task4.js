function task(input) {
    let index = input.indexOf("PARTY");
    let incomingGuests = input.splice(index + 1);
    input.pop();
    let list = input;
    let party = {
        regular: [],
        vip: []
    }

    while (list.length != 0) {
        let current = list.shift();
        let type = isNaN(current[0]) ? "regular" : "vip";
        party[type].push(current);

    }
    while (incomingGuests.length != 0) {
        let current = incomingGuests.shift();
        let type = isNaN(current[0]) ? "regular" : "vip";
        let index = party[type].indexOf(current);
        if(index != -1){
            party[type].splice(index, 1);
        }
        
    }
    let didNotCome = party.regular.length + party.vip.length;
    console.log(didNotCome);
    console.log(party.vip.join("\n"));
    console.log(party.regular.join("\n"));

}
task(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])