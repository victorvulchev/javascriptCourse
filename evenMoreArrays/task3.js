function task(matrix, forces){
    let newArr = matrix.map(x => x.split(" ").map(Number));
    for(let i = 0; i < forces.length; i++){
        let currentArr = forces[i].split(" ");
        let force = currentArr[0];
        let numb = Number(currentArr[1]);
        switch(force){
            case"breeze":
                newArr[numb] = newArr[numb].map(x => x - 15);
                break;
            case"gale":
                for(let j = 0; j < 5; j++){
                    newArr[j][numb] = newArr[j][numb] - 20;
                }
                break
            default:
                for (let a = 0; a < newArr.length; a++) {
                    newArr[a] = newArr[a].map(x => x + numb);
                }
                break;
            
        }
        for( let q = 0; q < 5; q++){
            for(let w = 0; w < 5; w++){
                if(newArr[q][w] < 0){
                    newArr[q][w] = 0;
                }
            }
        }
    }
    let polutedAreas = []
    let isPoluted = false
    for( let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            if(newArr[i][j] >= 50){
                polutedAreas.push(`[${i}-${j}]`);
                isPoluted = true
            }
        }
    }
    if(isPoluted){
    console.log(`Polluted areas: ${polutedAreas.join(", ")}`);
    }
    else{
        console.log("No polluted areas")
    }
    for(let i of newArr){
        console.log(i);
    }

}
task(['5 7 -72 14 -90',

'-41 35 37 27 33',

'23 16 27 -42 12',

'2 20 28 -39 14',

'16 -34 31 10 24'],

['breeze 1', 'gale 2', 'smog 25'])