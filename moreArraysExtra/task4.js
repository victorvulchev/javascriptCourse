function task(arr){
    let sortedArr = arr.sort((a,b) => a-b);
    let newArr = [];
    while(sortedArr.length > 0){
         let maxNumb = sortedArr.pop();
         let minNumb = sortedArr.shift();
         newArr.push(maxNumb);
         newArr.push(minNumb);
    }
   
    console.log(newArr.join(" "));

}
task([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
task([34, 2, 32, 45, 690, 6, 32,

    7, 19, 47])