function task(input){
    let numbs = input.split(" ").map(Number);
    let average = 0;
    for(i of numbs){
        average += i;
    }
    average /= numbs.length;
    let biggerThanAverage = numbs.filter(x => x > average)
    biggerThanAverage = biggerThanAverage.sort((a,b) => b-a);
    if(biggerThanAverage.length > 5){
        while(biggerThanAverage.length != 5){
            biggerThanAverage.pop();
        }
        console.log(biggerThanAverage.join(" "));
    }
    else if(biggerThanAverage.length < 1){
        console.log("No");
    }
    else{
        console.log(biggerThanAverage.join(" "));
    }
}
task('-1 -2 -3 -4 -5 -6')