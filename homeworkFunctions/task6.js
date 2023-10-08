function task(a, b, c){
    let negCounter = 0;
    if(a < 0){
        negCounter++;
    }
    if(b < 0){
        negCounter++;
    }
    if(c < 0){
        negCounter++;
    }
    if(negCounter == 1 || negCounter == 3){
        console.log("Negative");
    }
    else{
        console.log("Positive");
    }
    
}
task(5,

    12,
    
    -15)