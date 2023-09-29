function task(arr1, arr2){
    let newArr = [];
    for( let i of arr1){
        if(arr2.includes(i)){
            newArr.push(i);
        }
    }
    for(i of newArr){
        console.log(i);
    }
}
task(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2'])