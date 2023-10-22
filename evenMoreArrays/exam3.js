function task(input){
    let chat = [];
    for(let i = 0; i< input.length; i++){
        let currentLine = input[i].split(" ");
        let command = currentLine[0];
        let word = currentLine[1];
        let index = chat.indexOf(word);
        let stop = false;
        switch(command){
            case"Chat":
                chat.push(word);
                break;
            case"Delete":
                if(chat.includes(word)){
                    chat.splice(index, 1);
                }
                break;
            case"Edit":
                let newMessage = currentLine[2];
                if(chat.includes(word)){
                    chat.splice(index, 1);
                    chat.splice(index, 0, newMessage);
                }
                break;
            case"Pin":
                if(chat.includes(word)){
                    chat.splice(index, 1);
                    chat.push(word);
                }
                break;
            case"Spam":
                for(let j = 1; j < currentLine.length; j++){
                    chat.push(currentLine[j]);
                }
                break;
            default:
                stop = true
                break;

        }
        if(stop){
            break;
        }
    }
    console.log(chat.join("\n"))
}
task(["Chat John",

"Spam Let's go to the zoo",

"Edit zoo cinema",

"Chat tonight",

"Pin John",

"end"])