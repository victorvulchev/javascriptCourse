function task(arr){
    let train = arr[0].split(" ");
    train = train.map(Number);
    let capacity = Number(arr[1]);
    for(let i = 2; i< arr.length; i++){
        let current = arr[i].split(" ");
        let first = current[0];
        let second = current [1];
        if(first == "Add"){
            train.push(Number(second));
        }
        else{
            for(let j = 0; j < train.length; j++){
                let numb = Number(first);
                if(train[j] + numb <= capacity){
                    train[j] += numb;
                    break;
                }
            }
        }
        
    }
    console.log(train.join(" "))
}
task(['0 0 0 10 2 4',

'10',

'Add 10',

'10',

'10',

'10',

'8',

'6'])
//72 54 21 12 4 75 23 10 0