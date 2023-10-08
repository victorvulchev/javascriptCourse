function task(word, reps){
    let buff = ""
    for(let i = 1; i <= reps; i++){
       buff += word
    }
    return buff
}
task("abc", 3)