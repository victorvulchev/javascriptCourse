function task(arr){
    let k = arr[0];
    let newArr = arr.slice(1);
    let workArr = Array.from(newArr);
    let first = newArr.splice(0, k);
    let begin= workArr.length - k
    let last = workArr.splice(begin, k );
    //console.log(workArr)
    console.log(first.join(" "))
    console.log(last.join(" "))
}
task([2,

    7, 8, 9])
