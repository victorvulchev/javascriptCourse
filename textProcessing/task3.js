function task(word, tocensor){
    let stars = tocensor.length;
    
    while(word.includes(tocensor)){
        word = word.replace(tocensor, "*".repeat(stars))
    }
    console.log(word);
}

task('A small sentence with some words',

'small')