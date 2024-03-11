function solution(){
    let ingredients = {
        "protein" : 0,
        "carbohydrate": 0,
        "fat": 0,
        "flavour":0
    }
    let recepies = {
        "apple": "1 carbohydrate, 2 flavour",
        "lemonade": "10 carbohydrate, 20 flavour",
        "burger":"5 carbohydrate, 7 fat, 3 flavour",
        "eggs": "5 protein, 1 fat, 1 flavour",
        "turkey":"10 protein, 10 carbohydrate, 10 fat, 10 flavour"

    }
    function restock(microelm, quantity){
        ingredients[microelm] += Number(quantity);
        return "Success";
    }
    function prepare(recipe, quantity){
        let neededMicroelms = recepies[recipe].split(", ")
        for(let ingredient of neededMicroelms){
            let[num, elm] = ingredient.split(" ");
            let requiredAmount = Number(num) * Number(quantity);
            if((ingredients[elm] - requiredAmount) < 0){
                 return `Error: not enough ${elm} in stock`
            }
        }
        for(let ingredient of neededMicroelms){
            let[num, elm] = ingredient.split(" ");
            let requiredAmount = Number(num) * Number(quantity);
            ingredients[elm] -= requiredAmount;
        }
        return "Success";
    }
    function report(){
        let stats = Object.entries(ingredients);
        let buff =""
        for(let [key, val] of stats){
            buff += `${key}=${val} `;
        }
        return buff.trim();
    }

    return function process(input){
        if(input == "report"){
            return report();
        }
        else{
            let [command, item, quantity] = input.split(" ");
            switch(command){
                case"restock":
                    return restock(item, quantity);
                case"prepare":
                    return prepare(item, quantity); 
            }
        }
        
    }
}

let manager = solution ();


/*console.log (manager ("prepare turkey 1"));
console.log (manager ("restock protein 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock carbohydrate 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("restock flavour 10"));
console.log (manager ("prepare turkey 1"));
console.log (manager ("report"));*/
console.log (manager ("restock carbohydrate 10")); // Success
console.log (manager ("restock flavour 10")); // Error: not enough carbohydrate in stock
console.log (manager ("prepare apple 1"));
console.log (manager ("restock fat 10"));
console.log (manager ("prepare burger 1"));
console.log (manager ("report"));



