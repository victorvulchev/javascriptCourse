function task(arr){
    let addressBook = {};
    for(let i of arr){
        let currentPerson = i.split(":");
        let name = currentPerson.shift();
        let address = currentPerson.shift();
        addressBook[name] = address;
    }
    let sorted = Object.entries(addressBook);
    sorted.sort((a, b) => a[0].localeCompare(b[0]))
    for(let [key, value] of sorted){
        console.log(`${key} -> ${value}`)
    }
}
task(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])