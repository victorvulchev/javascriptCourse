/*function task(word, text){
    let toCheck = text.toLowerCase();
    let toFind = word.toLowerCase();
    if(toCheck.includes(toFind)){
        console.log(toFind);
    }
    else{
        console.log(`${toFind} not found!`)
    }
}*/
function task(word, text){
    text = text.toLowerCase().split(" ");
    if(text.includes(word)){
        console.log(word);
    }
    else{
        console.log(`${word} not found!`)
    }
}

task('javascript',

'JavaScript is the best programming language')