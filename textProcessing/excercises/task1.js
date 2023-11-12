function task(words, sentence){
    let thewords = words.split(", ");
    let thesentence = sentence.split(" ");
    let toReplace = [];
    for(i of thesentence){
        if(i.includes("*")){
            toReplace.push(i);
        }
    }
    let sentenceAgain = thesentence.join(" ");
    
    for(i of thewords){
        let rightWord = "";
        for(j of toReplace){
            if(i.length == j.length){
                rightWord = j;
            }
        }
        sentenceAgain = sentenceAgain.replace(rightWord, i);
    }
    console.log(sentenceAgain);
}
task('great, learning',

'softuni is ***** place for ******** new programming languages')