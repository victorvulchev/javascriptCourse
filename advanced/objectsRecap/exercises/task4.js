function task(arr){
    let heroes = []
    for(let i of arr){
        let [name, level, items] = i.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];
        let hero = {};
        hero.name = name;
        hero.level = level;
        hero.items = items;
        heroes.push(hero);
    }
    console.log(JSON.stringify(heroes));
}
task(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara'])