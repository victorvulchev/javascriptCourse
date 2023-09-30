function task(arr) {
    let health = 100;
    let coins = 0;
    let rooms = arr[0].split("|");
    let floor = 0;
    let bool = false;
    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(" ");
        let itemOrMonster = room[0];
        let numb = Number(room[1]);
        floor++;
        switch (itemOrMonster) {
            case "potion":
                let newHeal = health + numb <= 100 ? numb : 100 - health;
                health += newHeal;
                console.log(`You healed for ${newHeal} hp.`);
                console.log(`Current health: ${health} hp.`);

                break;
            case "chest":
                coins += numb;
                console.log(`You found ${numb} coins.`);
                break;
            default:
                health -= numb;
                if (health > 0) {
                    console.log(`You slayed ${itemOrMonster}.`)
                }
                else {
                    console.log(`You died! Killed by ${itemOrMonster}.`);
                    console.log(`Best room: ${floor}`);
                    bool = true;
                }
                break;

        }
        if (bool) {
            break;
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`)
    }
}
task(["cat 100|potion 30|orc 10|chest 10|snake 25|chest 110"])