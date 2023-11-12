function task(arr){
    let resources = {};
    for(let i = 0; i< arr.length; i+=2){
        let material = arr[i];
        let quantity = Number(arr[i+1]);
        if(!resources.hasOwnProperty(material)){
            resources[material] = quantity;
        }
        else{
            resources[material] = resources[material] + quantity;
        }
    }
    for(let [key, value] of Object.entries(resources)){
        console.log(`${key} -> ${value}`)
    }
}

task([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])