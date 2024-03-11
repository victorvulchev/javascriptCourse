function task(arr, startIdx, endIdx){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(endIdx > startIdx.length - 1){
        endIdx = startIdx.length - 1;
    }
    if(startIdx < 0){
        startIdx = 0;
    }
    let newArr = arr.slice(startIdx, endIdx + 1);
    let sum = newArr.reduce((acc, currentNum) => acc + currentNum, 0);
    if(typeof sum != "number"){
        return NaN;
    }
    return sum;
}

task([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
