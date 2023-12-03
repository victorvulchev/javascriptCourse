function task(arr){
    let pattern = /([|#])(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,10000})\1/g;
    let text = arr.shift();
    
    let totalCals = 0;
    let supply = [];
    let matches = text.matchAll(pattern);
    for(let match of matches){
        let {food, date, calories} = match.groups;
        totalCals += Number(calories);
        supply.push({food, date, calories});
    }
    
    let days = Math.floor(totalCals / 2000);
    console.log(`You have food to last you for: ${days} days!`)
    supply.forEach(x => console.log(`Item: ${x.food}, Best before: ${x.date}, Nutrition: ${x.calories}`))

}

task([

    'Hello|#Invalid food#19/03/20#450|$5*(@'
    
    ])