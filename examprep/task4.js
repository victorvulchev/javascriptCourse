function task(arr){
    let mainMessage = arr.shift();
    let current = arr.shift();
    while(current != "Decode"){
        let todo = current.split("|");
        let[action, part1, part2] = todo;
        switch(action){
            case"Move":
                let firstNLetters = mainMessage.substring(0,Number(part1));
                mainMessage = mainMessage.substring(Number(part1),);
                mainMessage = mainMessage + firstNLetters;
                break;
            case"Insert":
                let index = Number(part1);
                mainMessage = mainMessage.slice(0, index) + part2 + mainMessage.slice(index);
                break;
            case"ChangeAll":
                while(mainMessage.includes(part1)){
                    mainMessage = mainMessage.replace(part1, part2);
                }
                break;

        }
        current = arr.shift();
    }
    console.log(`The decrypted message is: ${mainMessage}`)
}
task([

    'owyouh',
    
    'Move|2',
    
    'Move|3','Insert|3|are', 'Insert|9|?', 'Decode' ])