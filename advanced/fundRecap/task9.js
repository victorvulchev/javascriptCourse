function task(num){
    if(num == 0 || num == null){
        num = 5
    }
    let buff = "";
    for(let i = 1; i <= num; i++){
        buff+="* ";
    }
    for(let i = 1; i <= num; i++){
        console.log(buff);}

}

task(0)