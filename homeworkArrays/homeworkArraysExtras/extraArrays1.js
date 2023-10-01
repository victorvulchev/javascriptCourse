function task(arr){
    let newArr = [];
    let step = Number(arr[arr.length -1]);
    newArr.push(arr[0]);
    for(let i = step; i < arr.length - 1; i+= step){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "));
}
task(['dsa', 'asd', 'test', 'test', '2'])