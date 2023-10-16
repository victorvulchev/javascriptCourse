function task(numbs, bombInfo){
    let [bombNumb, power] = bombInfo;
    while(numbs.includes(bombNumb)){
        let index = numbs.indexOf(bombNumb);
        numbs.splice(Math.max(0, index - power), power * 2 + 1, 0);
    }
    let sum = 0;
    for(let numb of numbs){
        sum += numb;
    }
    console.log(sum);
}

task([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2])