function task(name, lastName, hairColor){
    let person={
        name, 
        lastName, 
        hairColor};
    console.log(JSON.stringify(person))
}
task("Jason", "Jones", "Brown")