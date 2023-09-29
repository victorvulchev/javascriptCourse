function task(array){
    sum = 0;
    normalSum = 0;
    newArray = [];
    for(let i = 0; i<array.length; i++){
        if( array[i] % 2 == 0){
            sum += array[i] + i;
            newArray.push(array[i] + i);
        }
        else{
            sum+= array[i] - i;
            newArray.push(array[i] - i);
        }
        normalSum += array[i];
    }
    console.log(newArray);
    console.log(normalSum);
    console.log(sum);
}
task([1, 2, 3, 4,5, 6, 7, 8])