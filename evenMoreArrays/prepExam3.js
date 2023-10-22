function task(input){
    let pirateShip = input[0].split(">").map(Number);
    let warShip = input[1].split(">").map(Number);
    let maxHealth = Number(input[2]);
    let capacityForRepair = maxHealth * 0.2;
    let index = 3;
    let command = input[index];
    index++
    let bool = false
    while(command != "Retire"){
        let currentActions = command.split(" ");
        let action = currentActions[0];
        switch(action){
            case"Fire":
                let a = Number(currentActions[1]);
                let damage = Number(currentActions[2]);
                if(a < warShip.length && a >= 0){
                    warShip[a] -= damage;
                    if(warShip[a] <= 0){//WIN CONDITION
                        console.log("You won! The enemy ship has sunken")
                        bool = true;
                        break;
                    }
                }
                break;
            case"Defend":
                let start = Number(currentActions[1]);
                let end = Number(currentActions[2]);
                let damage2 = Number(currentActions[3]);
                if(start< pirateShip.length && end < pirateShip.length && start >= 0 && end > 0){
                    for(let i = start; i<= end; i++){
                        pirateShip[i] = pirateShip[i] -= damage2;
                        if(pirateShip[i] <= 0){// LOSE CONDITION
                            console.log('You lost! The pirate ship has sunken.')
                            bool = true;
                            break;
                        }
                    }
                }
                break;
            case"Repair":
                let n = Number(currentActions[1]);
                let health = Number(currentActions[2]);
                if (n < pirateShip.length && n >= 0) {
                    pirateShip[n] += health;
                    if (pirateShip[n] > maxHealth) {
                        pirateShip[n] = maxHealth;
                    }
                }
                break;
            default:
                let damaged = pirateShip.filter(section => section < capacityForRepair)
                console.log(`${damaged.length} sections need repair.`)
        }
        if(bool){
            break;
        }
        command = input[index];
        index++
    }

    if(!bool){
        let sumPirates = 0;
        let sumWar = 0;
        for(i of pirateShip){
            sumPirates += i;
        }
        for(i of warShip){
            sumWar += i;
        }
        console.log(`Pirate ship status: ${sumPirates}`)
        console.log(`Warship status: ${sumWar}`)

    }

}
task(["2>3>4>5>2",

"6>7>8>9>10>11",

"20",

"Status",

"Fire 2 3",

"Defend 0 4 11",

"Repair 3 18",

"Retire"])