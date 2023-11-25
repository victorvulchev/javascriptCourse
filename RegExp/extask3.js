/*function task(input){
    let pattern = /%(?<customer>[A-z][a-z]+)%[^|$%.]*<(?<product>[A-Za-z]+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+|\d+\.\d+)\$/
    let totalPrice = 0;
    let command = input.shift()
    while(command != "end of shift"){
        let match = command.match(pattern);
        if(match){
            let {customer, product, quantity, price} = match.groups;
            let actualPrice = Number(quantity) * Number(price);
            console.log(`${customer}: ${product} - ${actualPrice.toFixed(2)}`);
            totalPrice += actualPrice;
        }
        command = input.shift()
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`)*/

task(['%George%<Croissant>|2|10.3$',

'%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$',

'end of shift'])

function task(arr){
    let income = 0;
    let pattern = /%(?<customer>[A-z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>\d+|\d+\.\d+)\$/
    let command = arr.shift();
    while(command != "end of shift"){
        let match = command.match(pattern);
        if(match){
            let {customer, product, quantity, price} = match.groups;
            let totalPrice = Number(quantity) * Number(price);
            income += totalPrice
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);

        }
        command = arr.shift();
    }
    console.log(`Total income: ${income.toFixed(2)}`)

}
