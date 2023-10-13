function task(arr){
    let list = arr.sort();
    for(i = 0; i < list.length; i++){
        console.log(`${i + 1}.${list[i]}`)
    }
}
task(['Potatoes', 'Tomatoes', 'Onions',

'Apples'])
task(['Watermelon', 'Banana', 'Apples'])