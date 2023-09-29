function task(arr, rot){
    for(let i = 1; i <= rot; i++){
        let first = arr[0];
        arr.shift();
        arr.push(first)
    }
    console.log(arr.join(" "))
}
task([51, 47, 32, 61, 21], 2)