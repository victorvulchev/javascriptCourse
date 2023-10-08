/*· coffee - 1.50

· water - 1.00

· coke - 1.40

· snacks - 2.00*/
function task(item, quantity){
    let price = 0
    switch(item){
        case"coffee": price = 1.5 * quantity; break;
        case"water": price = 1 * quantity; break;
        case"coke": price = 1.4 * quantity; break;
        default: price = 2 * quantity; break;
    }
    console.log(price.toFixed(2))
}