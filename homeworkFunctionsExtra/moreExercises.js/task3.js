function task(input){
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    let first = Math.sqrt((x1 * x1 + y1 * y1));
    let second = Math.sqrt((x2 * x2 + y2 * y2));
    let third = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
    //let third = Math.sqrt((x2 * x2 - x1 * x1) + (y2 * y2 - y1 * y1));
    if(Number.isInteger(first)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(second)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(Number.isInteger(third)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

task([3, 0, 0, 4])
task([2, 1, 1, 1])