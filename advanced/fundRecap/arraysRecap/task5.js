function task(arr){
    let newArr = [];
    let sortedArr = arr.sort((a,b) => a-b);
    for(let i =1; i <= 2; i++){
        newArr.push(sortedArr.shift());
    }
    console.log(newArr.join(" "))
}

task([30, 15, 50, 5])