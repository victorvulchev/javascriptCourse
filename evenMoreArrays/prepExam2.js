function task(input){
    let dungeon = input.split("|");
    let health = 100;
    let btc = 0;
    let floor = 0;
    let success = true;
    for(let i = 0; i < dungeon.length; i++){
        let currentFloor = dungeon[i].split(" ");
        let itemOrMonster = currentFloor[0];
        let numb = Number(currentFloor[1]);
        floor++
        switch(itemOrMonster){
            case"potion":
                let healedFor = 0;
                health + numb > 100? healedFor = 100 - health : healedFor = numb;
                console.log(`You healed for ${healedFor} hp.`);
                health += healedFor;
                console.log(`Current health: ${health} hp.`);
                break;
            case"chest":
                console.log(`You found ${numb} bitcoins.`);
                btc += numb;
                break;
            default:
                health -= numb;
                if(health <= 0){
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    success = false;
                }
                else{
                    console.log(`You slayed ${itemOrMonster}.`)
                }
                break;
        }
        if(!success){
            break;
        }
    }
    if(success){
        console.log("You've made it!");
        console.log(`Bitcoins: ${btc}`);
        console.log(`Health: ${health}`);
    }
    else{
        console.log(`Best room: ${floor}`)
    }
}
task("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")