function task(arr) {
    let sizeField = Number(arr[0]);
    let bugPositions = arr[1].split(" ")
    let field = [];

    for (let i = 0; i < sizeField; i++) {
        field.push(0);
    }
    for (let i = 0; i < bugPositions.length; i++) {
        if (bugPositions[i] < field.length) {
            field[bugPositions[i]] = 1;
        }
    }
    for (i = 2; i < arr.length; i++) {
        let command = arr[i].split(" ");
        let ladybug = Number(command[0]);
        let move = command[1];
        let spaces = Number(command[2]);
        if (field[ladybug] == 1) {
            switch (move) {
                case "right":
                    let toGoRight = ladybug + spaces;
                    if (toGoRight < field.length) {
                        while (toGoRight < field.length) {
                            if (field[toGoRight] == 1) {
                                toGoRight++;
                                if(toGoRight >= field.length){
                                    field[ladybug] = 0;
                                }
                                
                            }
                            else {
                                field[toGoRight] = 1;
                                field[ladybug] = 0;
                                break;
                            }
                        }
                    }
                    else {
                        field[ladybug] = 0;
                    }
                    break;
                default:
                    let toGoLeft = ladybug - spaces;
                    if (toGoLeft >= 0) {
                        while (toGoLeft >= 0) {
                            if (field[toGoLeft] == 1) {
                                toGoLeft--;
                                if(toGoLeft < 0){
                                    field[ladybug] = 0;
                                }
                            }
                            else {
                                field[toGoLeft] = 1;
                                field[ladybug] = 0;
                                break;
                            }
                        }
                    }
                    else {
                        field[ladybug] = 0;
                    }
                    break;

            }
        }
    }
    console.log(field.join(" "));
}
task([ 3, '-1 4',

'0 left 1',

'2 left 1' ])