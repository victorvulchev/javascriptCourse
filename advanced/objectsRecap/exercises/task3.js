function task(requirements) {
    let car ={};
    car.model = requirements.model;
    if(requirements.power <= 90){
        car.engine = { power: 90, volume: 1800 };
    }
    else if(requirements.power <= 120){
        car.engine = { power: 120, volume: 2400 };
    }
    else{
        car.engine = { power: 200, volume: 3500 };;
    }
    car.carriage = { type: requirements.carriage, color: requirements.color }
    if(requirements.wheelsize % 2 == 0){
        requirements.wheelsize = requirements.wheelsize - 1;
    }
    
    car.wheels = [1, 2, 3, 4].fill(requirements.wheelsize);
    return car


}

task({ model: 'VW Golf II',

power: 90,

color: 'blue',

carriage: 'hatchback',

wheelsize: 14 })