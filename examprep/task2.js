function task(arr){
    let pattern = /([@|#])(?<word>[A-Za-z]{3,})\1\1(?<word2>[A-Za-z]{3,})\1/g;
    let text = arr.shift();
    let words = [];
    let match;
    while ((match = pattern.exec(text)) !== null) {
        let word = match.groups["word"];
        let word2 = match.groups["word2"];
        words.push(word);
        words.push(word2);
    }
    let pairs = words.length / 2;
    let mirrorWords = [];
    for(let i = 0; i < words.length; i+=2){
        let one = words[i];
        let two = words[i+1];
        let rev = two.split("").reverse().join("");
        if(one == rev){
            let val = `${one} <=> ${two}`;
            mirrorWords.push(val);
        }
    }
    if(pairs > 0){
        console.log(`${pairs} word pairs found!`);
    }
    else{
        console.log("No word pairs found!");
    }
    if(mirrorWords.length > 0){
        console.log("The mirror words are:");
        console.log(mirrorWords.join(", "));
    }
    else{
        console.log("No mirror words!");
    }
}

task([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ])