function task(food, grams, costPerKG){
    let kg = grams / 1000;
    let totalCost = kg * costPerKG;
    console.log(`I need $${totalCost.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${food}.`)
}

task('orange', 2500, 1.80)