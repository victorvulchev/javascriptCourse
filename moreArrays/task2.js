function task(arr){
    newArr = [];
    for(let i=0; i < arr.length; i++){
        numb = Number(arr[i]);
        if(numb < 0){
            newArr.unshift(numb);
        }
        else{
            newArr.push(numb);
        }
    }
    for(let i=0; i < newArr.length; i++){
        console.log(newArr[i])
    }
}
task(['7', '-2', '8', '9'])
