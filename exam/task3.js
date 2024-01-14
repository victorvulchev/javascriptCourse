function task(arr) {
    class Hero {
        constructor(name) {
            this.name = name;
            this.spellBook = [];
        }
    }
    let current = arr.shift();
    let collection = [];
    while (current != "End") {
        let [command, name, spell] = current.split(" ");
        let currentHero = collection.find(hero => hero.name == name);
        switch (command) {
            case "Enroll":
                if (currentHero != undefined) {
                    console.log(`${name} is already enrolled.`)
                }
                else {
                    collection.push(new Hero(name));
                }
                break;
            case "Learn":
                if (currentHero == undefined) {
                    console.log(`${name} doesn't exist.`)
                }
                else {
                    if (currentHero.spellBook.includes(spell)) {
                        console.log(`${name} has already learnt ${spell}.`)
                    }
                    else { currentHero.spellBook.push(spell); }

                }
                break;
            case "Unlearn":
                if (currentHero == undefined) {
                    console.log(`${name} doesn't exist.`)
                }
                else {
                    if (!currentHero.spellBook.includes(spell)) {
                        console.log(`${name} doesn't know ${spell}.`)
                    }
                    else { currentHero.spellBook = currentHero.spellBook.filter(x => x != spell) }
                }
                break;

        }
        current = arr.shift();

    }
    console.log("Heroes:")
    collection.forEach(hero => console.log(`== ${hero.name}: ${(hero.spellBook).join(", ")}`))
}
task(["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"])


