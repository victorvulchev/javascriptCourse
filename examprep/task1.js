function task(arr){
    let secretMessage = arr.shift();
    while(arr.length != 0){
        let [command, part1, part2] = arr.shift().split(":|:")
        if(command == "Reveal"){
            break;
        }
        switch(command){
            case"InsertSpace":
                let index = Number(part1);
                secretMessage = secretMessage.slice(0, index) + " " + secretMessage.slice(index);
                console.log(secretMessage)
                break;
            case"Reverse":
                if(secretMessage.includes(part1)){
                    let reversed = part1.split("").reverse().join("");
                    secretMessage = secretMessage.split(part1).join('');
                    secretMessage = secretMessage.concat(reversed);
                    console.log(secretMessage)

                }
                else{
                    console.log("error");
                }
                break;
            default:
                while(secretMessage.includes(part1)){
                    secretMessage = secretMessage.replace(part1, part2);
                }
                console.log(secretMessage)
                break;
        }
    

    }
    console.log(`You have a new text message: ${secretMessage}`);

}
task([

    'heVVodar!gniV',
    
    'ChangeAll:|:V:|:l',
    
    'Reverse:|:!gnil',
    
    'InsertSpace:|:5',
    
    'Reveal'
    
    ])