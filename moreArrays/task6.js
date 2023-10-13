function task(arr){
    arr.sort((a,b)=> a-b);
    let smallest = arr.splice(0, 2);
    console.log(smallest.join(" "))
}
task([30, 15, 50, 5])
task([3, 0, 10, 4, 7, 3])