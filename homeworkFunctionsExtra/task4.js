function task(input){
    let fullNumb = String(input);
    let evenSum = 0;
    let oddSum = 0;
    for(let i = 0; i < fullNumb.length; i++){
        let numb = Number(fullNumb[i]);
        numb % 2 == 0? evenSum += numb : oddSum += numb;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
task(1000435)
task(3495892137259234)