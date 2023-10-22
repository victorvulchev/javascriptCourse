function task(input){
    let foodGrams = Number(input[0]) * 1000;
    let hayGrams = Number(input[1]) * 1000;
    let coverGrams = Number(input[2]) * 1000;
    let weightGrams = Number(input[3]) * 1000;
    let numbOfDay = 0
    let isEnough = true;
    
    for(let i = 1; i <= 30; i++){
        numbOfDay += 1;
        foodGrams -= 300;
        let dailyHay = foodGrams * 0.05;
        let dailyCover = weightGrams / 3;
        if(i % 2 == 0){
            hayGrams -= dailyHay
        }
        if(numbOfDay == 3){
            coverGrams -= dailyCover;
            numbOfDay = 0;
        }
        if(foodGrams <= 0 || coverGrams <= 0|| hayGrams <= 0){
            isEnough = false;
            break;
        }
        /*console.log(`Counter:${numbOfDay}`)
        console.log(`Day:${i}`)
        console.log(foodGrams);
        console.log(hayGrams);
        console.log(coverGrams);*/
    }
    foodGrams /= 1000;
    hayGrams /=1000;
    coverGrams /=1000;

    if(isEnough){
        console.log(`Everything is fine! Puppy is happy! Food: ${foodGrams.toFixed(2)}, Hay: ${hayGrams.toFixed(2)}, Cover: ${coverGrams.toFixed(2)}.`)
    }
    else{
        console.log('Merry must go to the pet store!')
    }
}
task(["9",

"5",

"5.2",

"1"])