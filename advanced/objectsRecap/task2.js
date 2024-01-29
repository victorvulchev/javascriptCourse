function task(arr){
    let popReg = {};
    arr.forEach(element => {
        let current = element.split(" <-> ");
        let city = current[0];
        let population = Number(current[1]);
        if(popReg.hasOwnProperty(city)){
            popReg[city] += population;
        }
        else{
            popReg[city] = population;
        }
    });
    let entries = Object.entries(popReg);
    for(let [key,value] of entries){
        console.log(`${key} : ${value}`)
    };
}

task(['Sofia <-> 1200000',

'Montana <-> 20000',

'New York <-> 10000000',

'Washington <-> 2345000',

'Las Vegas <-> 1000000'])