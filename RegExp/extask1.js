function task(input) {
    let pattern = />>(?<furniture>[A-Z][A-Za-z]+)<<(?<price>\d+|\d+\.\d+)!(?<quantity>\d+)/;
    let boughtItems = [];
    let totalPrice = 0;

    for (let line of input) {
        let match = line.match(pattern);

        if (line === 'Purchase') {
            break;
        }

        if (match) {
            let furniture = match.groups["furniture"];
            let price = match.groups['price'];
            let quantity = match.groups['quantity'];
            totalPrice += Number(price) * Number(quantity);
            boughtItems.push(furniture);
        }
    }

    console.log("Bought furniture:");
    if(boughtItems.length >0){console.log(boughtItems.join("\n"));}
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
task(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase'])