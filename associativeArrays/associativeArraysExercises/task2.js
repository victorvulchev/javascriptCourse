function task(input){
    let reps = [];
    let theInput = input.split(" ").map(str => str.toLowerCase())
    while(theInput.length > 0){
        let word = theInput.shift();
        let counter = 1;
        for(let i of theInput){
            if( word === i){
                counter++;
                let index = theInput.indexOf(i);
                theInput.splice(index, 1);
            }
        }
        if(counter % 2 !=0){
            reps.push(word);
        }
    }
    console.log(reps.join(" "))
}
task('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')