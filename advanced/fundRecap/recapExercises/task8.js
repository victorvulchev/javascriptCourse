function task(x1, y1, x2, y2){
    let first = Math.sqrt((0 - x1)**2 + (0 - y1)**2);
    let second = Math.sqrt((x2 - 0)**2 + (y2 - 0)**2);
    let third = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

    let list = [first, second, third];

    if(Number.isInteger(first)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(Number.isInteger(second)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if(Number.isInteger(third)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

}

task(2, 1, 1, 1)