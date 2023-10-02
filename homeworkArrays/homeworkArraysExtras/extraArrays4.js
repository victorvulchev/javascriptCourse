function task(arr){
    let newArr = [];
    let biggest = arr[0];
    newArr.push(biggest);
    for(let i =1; i < arr.length; i++){
        let currentNumb = arr[i];
        if(currentNumb >= biggest){
            biggest = currentNumb;
            newArr.push(biggest);
        }
    }
    return newArr.join(" ");
}
task([ 20, 3, 2, 15, 6, 1])