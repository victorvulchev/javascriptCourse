function task(num, op1, op2, op3, op4, op5){
    let current = Number(num);
    let list =[op1, op2, op3, op4, op5];
    for(let i of list){
        switch(i){
            case"chop": current /= 2; break;
            case"dice": current = Math.sqrt(current); break;
            case"spice": current++; break;
            case"bake": current *= 3; break;
            case"fillet": current -= (current *0.2); break;
        }
        console.log(current);
    }
}

task('9', 'dice', 'spice', 'chop', 'bake',

'fillet')