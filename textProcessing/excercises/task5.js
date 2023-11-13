function task(text){
    let arr = text.split("");
    let otherarr = [];
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let prev = arr[i-1];
        if(current != prev){
            otherarr.push(current);
        }
        
    }
    console.log(otherarr.join(""));
}
task('aaaaabbbbbcdddeeeedssaa')