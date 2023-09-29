function task(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        let isBigger = true;
        if( i + 1 == array.length){
            newArr.push(array[i]);
            break;
        }
        let first = array[i];
        for(let j = i + 1; j< array.length; j++){
            if(array[j] > array[i]){
                isBigger = false;
                break;
            }
        }
        if(isBigger){
            newArr.push(first);
        }
    }
    console.log(newArr.join(" "));
}
task([27, 19, 42, 2, 13, 45, 48, 15, 16])