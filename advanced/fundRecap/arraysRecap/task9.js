function task(matrix){
    let biggest = matrix[0][0];
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] > biggest){
                biggest = matrix[i][j];
            }
        }
    }
    console.log(biggest)
}

task([[20, 50, 10],

    [8, 33, 145]])