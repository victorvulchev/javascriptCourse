function task(num1, num2){
    let greatest = 1;
    for(let i = 1; i<= num2; i++){
        let res1 = num1 / i;
        let res2 = num2 / i;
        if(res1 % 1 == 0 && res2 % 1 == 0 && i > greatest){
            greatest = i;
        }
    }
    console.log(greatest);
}

task(15, 5)