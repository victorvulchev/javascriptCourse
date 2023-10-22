function task(input){
    let neededExp = input.shift();
    let battles = input.shift();
    let currentExp = 0;
    let counter = 0;
    let gotTank = false
    let battleCount = 0;
    for(let i = 0; i < battles; i++){
        counter++;
        currentExp += input[i];
        battleCount++;
        if(counter % 3 == 0){
            let additionalExp = input[i] * 0.15;
            currentExp += additionalExp;
        }
        if(counter % 5 == 0){
            let additionalExp = input[i] * 0.1;
            currentExp -= additionalExp;
        }
        if(counter % 15 == 0){
            let additionalExp = input[i] * 0.05;
            currentExp *= additionalExp;
        }
        if(currentExp >= neededExp){
            gotTank = true;
            break;
        }
    }
    if(gotTank){
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`)
    }
    else{
        let leftExp = neededExp - currentExp;
        console.log(`Player was not able to collect the needed experience, ${leftExp.toFixed(2)} more needed.`)
    }
    
}
task([400,

    5,
    
    50,
    
    100,
    
    200,
    
    100,
    
    20])
