function task(input){
    class Hero{
        constructor(name, level, items){
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
        display(){
            console.log(`Hero: ${this.name}`);
            console.log(`level => ${this.level}`);
            console.log(`items => ${this.items}`);
        }
    }
    let heroes = []

    for(let i = 0; i < input.length; i++){
        let currentHero = input[i].split(" / ");
        let name = currentHero.shift();
        let level = currentHero.shift();
        let items = currentHero.shift();
        heroes.push(new Hero(name, level, items));
    }
    heroes.sort((a, b) => a.level - b.level)
    for(i of heroes){
        i.display();
    }
}
task([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])