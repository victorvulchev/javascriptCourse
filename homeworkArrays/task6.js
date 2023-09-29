function task(arr){
    let index = 0;
    let equal = false;
    for(let i = 0; i< arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        for(let j = i+1; j< arr.length; j++){
            rightSum += arr[j];
        }
        for(let j = i -1; j>=0; j--){
            leftSum += arr[j];
            //console.log(arr[j]);
        }
        if(leftSum == rightSum){
            index = i;
            equal = true
            break;
        }
    }
    if(equal){
        console.log(index);
    }
    else{
        console.log("no");
    }
}
task([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4])