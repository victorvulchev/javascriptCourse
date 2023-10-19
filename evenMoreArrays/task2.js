function task(arr) {
    let hangar = [];
    for (let i = 0; i < arr.length; i++) {
        let newArr = arr[i].split(" ")
        hangar.push(newArr);
    }
    for (let i of hangar) {
        i.map(Number);
    }
    let coordinates = hangar[hangar.length - 1];
    let bunnyDamage = 0;
    let kills = 0;
    for (let i = 0; i < coordinates.length; i++) {
        let exactCoordinates = coordinates[i].split(",");
        let row = Number(exactCoordinates[0]);
        let col = Number(exactCoordinates[1]);
        let bombBunny = Number(hangar[row][col]);
        bunnyDamage += bombBunny
        kills++
        if( row != 0){//up
            hangar[row - 1][col] = Number(hangar[row - 1][col]) - bombBunny;
        }
        if(row != hangar.length - 2){//down
            hangar[row + 1][col] = Number(hangar[row + 1][col]) - bombBunny
        }
        if(col != 0){//left
            hangar[row][col-1] = Number(hangar[row][col-1]) - bombBunny
        }
        if(col != hangar[row].length - 1){//right
            hangar[row][col+1] = Number(hangar[row][col+1]) - bombBunny
        }
        if(row != 0 && col != 0){//leftUP
            hangar[row-1][col-1] = Number(hangar[row-1][col-1]) - bombBunny
        }
        if(row != hangar.length - 2 && col != 0){//leftDown
            hangar[row + 1][col - 1] = Number(hangar[row + 1][col - 1]) - bombBunny
        }
        if(row != 0 && col == hangar[row].length - 1){//rightUp
            hangar[row-1][col+1] = Number(hangar[row-1][col+1]) - bombBunny
        }
        if(row == hangar.length - 2 && col == hangar[row].length - 1){//rightDown
            hangar[row + 1][col + 1] = Number(hangar[row + 1][col + 1]) - bombBunny

        }
        
    }
    for(i = 0; i < hangar.length - 2; i++){
        for(j = 0; j< hangar[i].length; j++){
            if(Number(hangar[i][j]) > 0){
                bunnyDamage += Number(hangar[i][j])
                kills++
            }
        }
    }
    console.log(bunnyDamage);
    console.log(kills);



}
task(['10 10 10',

'10 10 10',

'10 10 10',

'0,0'])
/*for (j = 0; j < hangar.length - 1; j++) {
            for (let k = 0; k < hangar[j].length; k++) {
                let currentRow = hangar[j];
                let center = currentRow[k];
                let up = j == 0 ? null : hangar[j - 1][k];
                let down = j == hangar.length - 2 ? null : hangar[j + 1][k];
                let left = k == 0? null : hangar[j][k-1];
                let right = k == hangar[j].length - 1? null :hangar[j][k+1];
                let leftUp = j == 0 || k == 0? null : hangar[j-1][k-1];
                let leftDown = j == hangar.length - 2 || k == 0? null : hangar[j + 1][k - 1];
                let rightUp = j == 0 || k == hangar[j].length - 1? null : hangar[j-1][k+1];
                let rightDown = j == hangar.length - 2|| k == hangar[j].length - 1? null :hangar[j + 1][k + 1];
                let directions = [up, down, left, right, leftUp, leftDown, rightDown, rightUp];
                for(let direction of directions){
                    if(direction != null){

                    }
                }
            }
        }*/