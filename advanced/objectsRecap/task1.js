function task(name, population, treasury){
    let city = {};
    city.name = name;
    city.population = population;
    city.treasury = treasury;
    return city;
}

console.log(task('Tortuga',

7000,

15000))