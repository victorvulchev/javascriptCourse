function task(sentence, word){
    let arrSentence = sentence.split(" ");
    let counter = 0;
    for(let i of arrSentence){
        if(i == word){
            counter++;
        }
    }
    console.log(counter);

}