function task(input){
    let arr = input.split(" ");
    let specialWords = [];
    for(i of arr){
        if(i.includes("#") && i.length > 1){
            let current = i.substring(1);
            if(/^[a-zA-Z]+$/.test(current)){
                specialWords.push(current)
            }
        }
    }
    for(i of specialWords){
        console.log(i);
    }
}
task('The symbol # is known #variously in English-speaking #regions as the #number sign')