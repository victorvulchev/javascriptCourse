function task(...args){
    let counterOfTypes = {};
    for(let arg of args){
        let type = typeof arg;
        if(counterOfTypes.hasOwnProperty(type)){
            counterOfTypes[type]++;
        }
        else{
            counterOfTypes[type] = 1;
        }
        if(type == "object"){
            console.log(`${type}:`)
        }
        else{console.log(`${type}: ${arg}`);}
    }
    let sorted = Object.fromEntries(Object.entries(counterOfTypes).sort(([,a], [,b]) => b -a))
    let toPrint = Object.entries(sorted);
    for(let[key, val] of toPrint){
        console.log(`${key} = ${val}`);
    }
}

task({ name: 'bob'}, 3.333, 9.999)

/*
'object:',
    'number: 3.333',
    'number: 9.999',
    'number = 2',
    'object = 1'
    */