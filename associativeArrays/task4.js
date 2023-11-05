function task(arr){
    let map = new Map();
    for(let i of arr){
        let currentProd = i.split(" ");
        let product = currentProd.shift();
        let quantity = Number(currentProd.shift());

        if(!map.has(product)){
            map.set(product, +quantity);

        }
        else{
            let currentQuantity = map.get(product);
            let newQuantity = currentQuantity + quantity;
            map.set(product, newQuantity);
        }
    }
    for(i of map){
        console.log(`${i[0]} -> ${i[1]}`)
    }
}