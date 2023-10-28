function task(input){
    let person = JSON.parse(input);
    for(let[key, value] of Object.entries(person)){
        console.log(`${key}: ${value}`);
    }
}