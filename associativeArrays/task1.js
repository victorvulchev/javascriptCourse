function task(arr){
    let phoneBook = {};
    while(arr.length > 0){
        let currentPerson = (arr.shift()).split(" ");
        let name = currentPerson.shift();
        let number = currentPerson.shift();
        phoneBook[name] = number;
    }
    for(let key in phoneBook){
        console.log(`${key} -> ${phoneBook[key]}`)
    }
}
task(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])