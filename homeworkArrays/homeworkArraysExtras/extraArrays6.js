function task(arr){
    let rowSum = 0;
    let columnSum = 0;
    let mainSum = 0;
    let isMagical = false;
    for(i = 0; i < arr.length; i++){
        mainSum += arr[i][0];
    }
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            rowSum += arr[i][j];
            columnSum += arr[j][i];
        }
        if(rowSum == columnSum&& columnSum == mainSum && rowSum == mainSum){
            isMagical = true;
        }
        else{
            isMagical = false;
            break;
        }
        rowSum = 0;
        columnSum = 0;
    }
    console.log(isMagical)

}
task([[4, 5, 6],

    [6, 5, 4],
    
    [5, 5, 5]])