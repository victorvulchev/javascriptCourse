function task(arr){
    let last = arr.pop();
    let first = arr.shift();
    console.log(Number(first) + Number(last));
}
task(['20', '30', '40'])