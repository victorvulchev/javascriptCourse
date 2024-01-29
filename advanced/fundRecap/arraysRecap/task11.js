function task(matrix){
    let pairs = 0;
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            let center = matrix[i][j];
            let left = (j-1)>= 0? matrix[i][j-1]: NaN;
            let right = (j+1)<=matrix[i].length? matrix[i][j+1]: NaN;
            let up = (i-1)>=0? matrix[i-1][j]: NaN;
            let down = (i+1)<=(matrix.length - 1)? matrix[i+1][j] : NaN;
            let directions = [left, right, up, down];
            directions.forEach(element => {
                if(element == center){
                    pairs++;
                }
                
            });
        }
    }

    console.log(pairs/2);
}

task([['test', 'yes', 'yo', 'ho'], ['well', 'done', 'yo', '6'], ['not', 'done', 'yet', '5']])