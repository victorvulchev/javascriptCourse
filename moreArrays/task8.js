function task(arr){
    let newArray = arr[0].split(" ");
    let numbArray = newArray.map(Number);
    for(i = 1; i< arr.length; i++){
        let currentArray = arr[i].split(" ");
        let command = currentArray[0];
        let aNumb = Number(currentArray[1])
        let bNumb = Number(currentArray[2])
        switch(command){
            case"Add":numbArray.push(aNumb); break;
            case"Remove": numbArray = numbArray.filter((x) => x != aNumb); break;
            case"RemoveAt": numbArray.splice(aNumb, 1); break;
            default: numbArray.splice(bNumb, 0, aNumb); break;
        }
    }
    console.log(numbArray.join(" "));
}
task(['6 12 2 65 6 42',

'Add 8',

'Remove 12',

'RemoveAt 3',

'Insert 6 2'])