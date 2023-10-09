function task(input){
    for(let i = 0; i< input.length; i++){
        let numb = String(input[i]);
        let revNumb = numb.split("").reverse().join("");
        if(numb == revNumb){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}
task([123,323,421,121])
console.log("-----")
task([32,2,232,1010])