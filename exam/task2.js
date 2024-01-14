function task(arr){
    let pattern = /!(?<command>[A-Z][a-z]{2,})!:\[(?<word>[A-Za-z]{8,})]/;
    let count = arr.shift();
    for(let i = 1; i <=count; i++){
        let current = arr.shift();
        let match = current.match(pattern);
        if(match){
            let {command, word} = match.groups;
            let numbsOfWord = [];
            for(let j = 0; j < word.length; j++){
                let numb = word.charCodeAt(j);
                numbsOfWord.push(numb);
            }
            console.log(`${command}: ${numbsOfWord.join(" ")}`)

        }
        else{
            console.log("The message is invalid")
        }
    }
}
task(["3",

"go:[outside]",

"!drive!:YourCarToACarWash",

"!Watch!:[LordofTheRings]"])
