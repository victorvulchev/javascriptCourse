function task(text){
    let half = text.length / 2;
    let firstHalf = text.substring(half);
    let secondHalf = text.substring(0, half);
    console.log(secondHalf.split("").reverse().join(""));
    console.log(firstHalf.split("").reverse().join(""));
}
task('tluciffiDsIsihTgnizamAoSsIsihT')