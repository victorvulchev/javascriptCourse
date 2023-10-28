function task(input){
    let cats = [];
    class Cat{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for(let i of input){
        let currentCat = i.split(" ");
        let [catName, catAge] = [currentCat[0], currentCat[1]];
        cats.push(new Cat(catName, catAge))
    }
    for(i of cats){
        i.meow()
    }
}
task(['Mellow 2', 'Tom 5'])