function task(text){
    let arr = [];
    let word = "";
    text+= "T"
    for(ch of text){
        if(/[A-Z]/.test(ch)){
            arr.push(word);
            word = ch;
        }
        else{
            word +=ch
        }
    }
    arr.shift();
    console.log(arr.join(", "));
}
task('SplitMeIfYouCanHaHaYouCantOrYouCan')