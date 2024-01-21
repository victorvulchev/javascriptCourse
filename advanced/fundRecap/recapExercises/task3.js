function task(num){
    let numbToString = String(num);
    let sum = 0;
    let areTheyTheSame = true
    for(let i = 0; i < numbToString.length; i++){
        let current = numbToString[i]
        if(current != numbToString[i+1] && i != (numbToString.length - 1)){
            areTheyTheSame = false;
            break;
        }
    }
    for(let i = 0; i < numbToString.length; i++){
        sum += Number(numbToString[i]);
    }
    console.log(areTheyTheSame);
    console.log(sum);
}

task(1234)