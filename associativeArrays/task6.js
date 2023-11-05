function task(arr){
    let words={};
    while(arr.length > 0){
        let word = arr.shift();
        if(words.hasOwnProperty(word)){
            let currentNumb = words[word];
            words[word] = currentNumb + 1;
        }
        else{
            words[word] = 1;
        }
    }
    let sorted = Object.entries(words);
    sorted.sort((a,b) => b[1]-a[1])
    for(let [key, value] of sorted){
        console.log(`${key} -> ${value} times`)
    }
}
task(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])