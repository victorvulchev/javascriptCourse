function task(a, b){
    function factorial(num){
        if(num == 0){
            return 1;
        }
        else{
            return num * factorial(num - 1);
        }
    }
    let fact1 = factorial(a);
    let fact2 = factorial(b);
    let dev = fact1 / fact2;
    console.log(dev.toFixed(2));
}

task(5, 2)
task(6, 2)