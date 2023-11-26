function task(arr){
    let numbHeroes = arr.shift();
    class Hero{
        constructor(name, health, mana){
            this.name = name;
            this.health = Number(health);
            this.mana = Number(mana);
        }
    }
    let party = [];
    for(i = 1; i<=numbHeroes ; i++){
        let current = arr.shift().split(" ");
        let [name, health, mana] = current;
        party.push(new Hero(name, health, mana))
    }
    while(arr.length != 0){
        let current = arr.shift();
        if(current == "End"){
            break;
        }
        let actions = current.split(" - ");
        let command = actions[0];
        let heroName = actions[1];
        let amount = Number(actions[2])
        let additional = actions[3];
        let currentHero = party.find(x => x.name === heroName);
        switch(command){
            case"CastSpell":
                if(currentHero.mana >= amount){
                    currentHero.mana = currentHero.mana - amount;
                    console.log(`${heroName} has successfully cast ${additional} and now has ${currentHero.mana} MP!`)
                }
                else{
                    console.log(`${heroName} does not have enough MP to cast ${additional}!`)
                }
                break;
            case"TakeDamage":
                if(currentHero.health > amount){
                    currentHero.health = currentHero.health - amount;
                    console.log(`${heroName} was hit for ${amount} HP by ${additional} and now has ${currentHero.health} HP left!`)
                }
                else{
                    console.log(`${heroName} has been killed by ${additional}!`)
                    party = party.filter(x => x.name != heroName);
                }
                break;
            case"Recharge":
                if(currentHero.mana + amount > 200){
                    console.log(`${heroName} recharged for ${200 - currentHero.mana} MP!`)
                    currentHero.mana = 200;
                }
                else{
                    console.log(`${heroName} recharged for ${amount} MP!`)
                    currentHero.mana = currentHero.mana + amount;
                }
                break;
            case"Heal":
                if(currentHero.health + amount > 100){
                    console.log(`${heroName} healed for ${100 - currentHero.health} HP!`)
                    currentHero.health = 100;
                }
                else{
                    console.log(`${heroName} healed for ${amount} HP!`)
                    currentHero.health = currentHero.health + amount;
                }
                break;
        }
        
    }
    for(i of party){
        console.log(i.name);
        console.log(`  HP: ${i.health}`)
        console.log(`  MP: ${i.mana}`)
    }
        

}
task([
    "2",
    "Solmyr 85 120",
    "Kyrre 99 50",
    "Heal - Solmyr - 10",
    "Recharge - Solmyr - 50",
    "TakeDamage - Kyrre - 66 - Orc",
    "CastSpell - Kyrre - 15 - ViewEarth",
    "End"
    ]
    )