function task(input){
    let route = input[0].split("||");
    let fuel = Number(input[1]);
    let ammo = Number(input[2]);
    let stop = false;
    for(let i = 0; i < route.length; i++){
        let encounter = route[i].split(" ");
        let command = encounter[0];
        let numb = Number(encounter[1]);
        switch(command){
            case"Travel":
                if(fuel >= numb){
                    fuel -= numb;
                    console.log(`The spaceship travelled ${numb} light-years.`);
                }
                else{
                    console.log("Mission failed.");
                    stop = true;
                }
                break;
            case"Enemy":
                if(ammo >= numb){
                    ammo -= numb;
                    console.log(`An enemy with ${numb} armour is defeated.`);
                }
                else{
                    let neededFuel = numb * 2;
                    if(fuel >= neededFuel){
                        fuel -= neededFuel;
                        console.log(`An enemy with ${numb} armour is outmaneuvered.`);
                    }
                    else{
                        console.log("Mission failed.");
                        stop = true;
                    }
                }
                break;
            case"Repair":
                fuel += numb;
                ammo += numb * 2;
                console.log(`Ammunitions added: ${numb * 2}.`);
                console.log(`Fuel added: ${numb}.`);
                break;
            default:
                console.log("You have reached Titan, all passengers are safe.")
                stop = true;
                break;

        }
        if(stop){
            break;
        }
    }
}
task(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',

'60',

'100'])