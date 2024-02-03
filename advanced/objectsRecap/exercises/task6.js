function task(arr){
    let sorted = arr.sort((a,b)=> a.localeCompare(b));
    let catalog = [];
    for(let i = 0; i < sorted.length; i++){
        let [product, price] = sorted[i].split(" : ");
        price = Number(price);
        catalog.push({product, price});
    }
    for(let i = 65; i <= 90; i++){
        let capLetter = String.fromCharCode(i);
        let startsWithI = false;
        for(let j of catalog){
            if(capLetter === j.product[0]){
                startsWithI = true;
                break;
            }
        }
        if(startsWithI){
            console.log(capLetter);
        }
        for(let j of catalog){
            if(capLetter === j.product[0]){
                console.log(`  ${j.product}: ${j.price}`)
            }
        }
    }
}

task(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])