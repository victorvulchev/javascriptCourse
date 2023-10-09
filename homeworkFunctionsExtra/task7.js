function task(input){
    for(let i = 1; i <= input; i++){
        let buff = "";
        for(let j = 1; j <= input; j++){
            buff += `${input} `;
        }
        console.log(buff)
    }
}
task(7)