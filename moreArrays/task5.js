function task(arr){
    let newArr = arr.filter((x, i) => i % 2 !=0);
    newArr = newArr.map(x => 2 * x);
    newArr.reverse();
    console.log(newArr.join(" "));
}  
task([10, 15, 20, 25])
task([3, 0, 10, 4, 7, 3])