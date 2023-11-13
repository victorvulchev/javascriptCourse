function task(word, text){
    let toCheck = text.toLowerCase();
    let toFind = word.toLowerCase();
    if(toCheck.includes(toFind)){
        console.log(toFind);
    }
    else{
        console.log(`${toFind} not found!`)
    }
}
task('javascript',

'JavaScript is the best programming language')