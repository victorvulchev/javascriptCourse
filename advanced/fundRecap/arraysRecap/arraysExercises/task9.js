function task(matrix){
    let bool = true;
    for(let i = 0; i < matrix.length; i++){
        let rowSum = matrix[i].reduce((acc, cur)=>{
            return acc + cur;
        }, 0)
        for(let j = 0; j < matrix[i].length; j++){
            let columnSum = 0;
            for(let k = 0; k < matrix.length; k++){
                columnSum += matrix[k][j];
            }
            if(rowSum != columnSum){
                bool = false
                break;
            }

        }
        if(!bool){
            break;
        }
    }
    return bool;

}

task([[1, 0, 0], [0, 0, 1], [0, 1, 0]])