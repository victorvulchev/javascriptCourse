function task(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(" "));
}
task([1, 2, 3, 4])
task([7, 8, 9, 7, 2, 3,

    4, 1, 2])
task([20, 8, 12, 13, 4,

    4, 8, 5])