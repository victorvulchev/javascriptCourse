function task(arr) {
    let couples = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentArray = arr[i];
        for (let j = 0; j < currentArray.length; j++) {
            let neighborLeft = j == 0? null : currentArray[j - 1];
            let neighborRight = j == currentArray.length - 1? null: currentArray[j + 1];
            let neighborDown = i ==arr.length - 1? null : arr[i + 1][j];
            let neighborUp = i == 0? null :arr[i - 1][j];
            let main = currentArray[j];
            let testArr = [neighborDown, neighborLeft, neighborRight, neighborUp];
            for(let k = 0; k <= 3; k++){
                if(testArr[k] == main){
                    couples++;
                    //console.log(`${testArr[k]}:${main}`)
                }

            }
            
        }
    }
    console.log(couples/2);
}
task([[2, 2, 5, 7, 4], [4, 0, 5, 3, 4], [2, 5, 5, 4, 2]])
task([['2', '3', '4', '7', '0'],

['4', '0', '5', '3', '4'],

['2', '3', '5', '4', '2'],

['9', '8', '7', '5', '4']])

2, 2, 5, 7, 4
4, 0, 5, 3, 4
2, 5, 5, 4, 2