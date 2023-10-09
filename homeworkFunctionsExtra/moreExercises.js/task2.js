function task(input){
    let fullNumb = String(input);
    while(true){
        let sum = 0;
        let average = 0;
        for(let i = 0; i < fullNumb.length; i++){
            sum += Number(fullNumb[i]);
        }
        average = sum / fullNumb.length;
        if(average > 5){
            break;
        }
        else{
            fullNumb += "9";
        }
    }
    console.log(fullNumb);
}
task(101)
task(5835)
