function task(arr, rotations){
    for(let i = 1; i <= rotations; i++){
        let current = arr.pop();
        arr.unshift(current);
    }
    console.log(arr.join(" "))
}

task(['Banana', 'Orange', 'Coconut', 'Apple'], 15)