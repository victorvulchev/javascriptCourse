function task(input){
    let sum = 0;
    for(let i =1; i < input; i++){
        if( input % i == 0){
            sum += i;
        }
    }
    if(input == sum){
        console.log("We have a perfect number!");
    }
    else{
        console.log("It's not so perfect.")
    }
}
task(6)
task(28)
task(1236498)