function task(input){
    class City{
        constructor(town, latitude, longitude){
            this.town = town;
            this.latitude = Number(latitude);
            this.longitude = Number(longitude);
        }
        display(){
            console.log(`{ town: '${this.town}', latitude: '${(this.latitude).toFixed(2)}', longitude: '${(this.longitude).toFixed(2)}' }`)
        }
    }
    let cities = []

    for(let i = 0; i < input.length; i++){
        let currentCity = input[i].split(" |");
        let [name, latitude, longitude] = [currentCity[0], Number(currentCity[1]), Number(currentCity[2])];
        cities.push(new City(name, latitude, longitude))
    }
    for(i of cities){
        i.display()
    }

}
task(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])