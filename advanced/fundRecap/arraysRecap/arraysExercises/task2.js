function task(arr, step){
    let newArr = [arr[0]];
    for(let i = step; i< arr.length; i+=step){
        newArr.push(arr[i]);
    }
    return newArr;
}

task(['1', '2', '3', '4', '5'], 6)