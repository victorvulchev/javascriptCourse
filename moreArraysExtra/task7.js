function task(arr, toDo){
    let [take, del, find] = toDo;
    let modArr = arr.splice(0, take);
    for( let i = 0; i < del; i++){
        modArr.shift();
    }
    let newArr = modArr.filter(x => x == find);
    let repeated = newArr.length;
    console.log(`Number ${find} occurs ${repeated} times.`)
}
task([7, 1, 5, 8, 2, 7],

    [3, 1, 5])