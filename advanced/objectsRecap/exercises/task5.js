function task(arr){
    let towns =[];
    let products = [];
    for(let i of arr){
        let [town, product, price] = i.split(" | ");
        price = Number(price);
        towns.push({town, product, price});
        if(!products.includes(product)){
            products.push(product);
        };
    }
    for(let i of products){
        let townName = "";
        let cheapest = Number.MAX_SAFE_INTEGER;
        for( j of towns){
            let curTown = j.town;
            let curProd = j.product;
            let curPrice = j.price;
            if(curProd == i){
                if(cheapest > curPrice){
                    cheapest = curPrice;
                    townName = curTown;
                }
            }
        }
        console.log(`${i} -> ${cheapest} (${townName})`)
    }
    
    
}
task(['Sample Town | Sample Product | 1000',

'Sample Town | Orange | 2',

'Sample Town | Peach | 1',

'Sofia | Orange | 3',

'Sofia | Peach | 2',

'New York | Sample Product | 1000.1',

'New York | Burger | 10'])