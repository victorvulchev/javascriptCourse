function task(arr){
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    console.log(first + last);
}
task(['20', '30', '40'])