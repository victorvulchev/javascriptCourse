function task(word, start, numbOfEls){
    let sub = word.substring(start, numbOfEls + start);
    console.log(sub);
}
task('SkipWord', 4, 7)