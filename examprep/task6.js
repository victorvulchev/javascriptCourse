function task(arr){
    class City{
        constructor(name, population, gold){
            this.name = name;
            this.population = Number(population);
            this.gold = Number(gold);
        }
    }
    let current = arr.shift();
    let settlements = [];
    while(current != "Sail"){
        let [name, population, gold] = current.split("||");
        let currentCity = settlements.find(settlement => settlement.name == name);
        if(currentCity != undefined){
            currentCity.population = currentCity.population + Number(population);
            currentCity.gold = currentCity.gold + Number(gold);
        }
        else{
            settlements.push(new City(name, population, gold));
        }
        current = arr.shift();
    }
    current = arr.shift();
    while(current != "End"){
        current = current.split("=>");
        let command = current.shift();
        let town = current.shift();
        let one = Number(current.shift());
        let two = Number(current.shift());
        let currentCity = settlements.find(settlement => settlement.name == town);
        switch(command){
            case"Plunder":
                let stolenGold = 0;
                if((currentCity.gold - two) > 0){
                    currentCity.gold = currentCity.gold - two;
                    stolenGold = two;
                }
                else{
                    if(two == currentCity.gold){
                        stolenGold = two;
                        currentCity.gold = 0;}
                    else{
                        stolenGold = two - currentCity.gold;
                        currentCity.gold = 0;}
                }
                let killedPeople = 0;
                if((currentCity.population - one) > 0){
                    currentCity.population = currentCity.population - one;
                    killedPeople = one;
                }
                else{
                    if(one == currentCity.population){
                        killedPeople = one
                        currentCity.population = 0;
                    }
                    else{
                    killedPeople = one - currentCity.population;
                    currentCity.population = 0;}
                }
                console.log(`${town} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);
                if(currentCity.gold == 0 || currentCity.population == 0){
                    console.log(`${town} has been wiped off the map!`)
                    settlements = settlements.filter(settlement => settlement.name != town);

                }
                break;
            case"Prosper":
                if(one > 0){
                    currentCity.gold = currentCity.gold + one;
                    console.log(`${one} gold added to the city treasury. ${town} now has ${currentCity.gold} gold.`)
                }
                else{
                    console.log("Gold added cannot be a negative number!")
                }

        }
        current = arr.shift();
        
    }
    if(settlements.length > 0){
        console.log(`Ahoy, Captain! There are ${settlements.length} wealthy settlements to go to:`)
        settlements.forEach(settlement => console.log(`${settlement.name} -> Population: ${settlement.population} citizens, Gold: ${settlement.gold} kg`))
    }
    else{
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!')
    }

}
task(["Nassau||95000||1000",

"San Juan||930000||1250",

"Campeche||270000||690",

"Port Royal||320000||1000",

"Port Royal||100000||2000",

"Sail",

"Prosper=>Port Royal=>-200",

"Plunder=>Nassau=>94000=>750",

"Plunder=>Nassau=>1000=>150",

"Plunder=>Campeche=>150000=>690",

"End"])