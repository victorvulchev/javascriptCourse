function task(input){
    let repeats = {};
    let words = input.shift().split(" ");
    for(let i = 0; i< words.length; i++){
        let counter = 0;
        for(let j = 0; j < input.length; j++){
            if(words[i] == input[j]){
                counter++;
            }
        }
        repeats[words[i]] = counter;
    }
    sorted = Object.entries(repeats);
    sorted.sort((a, b) => b[1]-a[1])
    for(let [key, value] of sorted){
        console.log(`${key} - ${value}`)
    }

}
task([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ])
    /*let firstRepeats = input.filter(x => x == first);
    let secondRepeats = input.filter(x => x == second);
    repeats[first] = firstRepeats.length;
    repeats[second] = secondRepeats.length;
    let sorted = Object.entries(repeats);*/