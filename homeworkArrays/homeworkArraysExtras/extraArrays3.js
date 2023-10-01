function task (arr){
    let rotations = Number(arr[arr.length - 1]);
    arr.pop();
    for(let i = 1; i <= rotations; i++){
        let element = arr[arr.length - 1];
        arr.pop();
        arr.unshift(element);
    }
    console.log(arr.join(" "));
}
task(['Banana', 'Orange', 'Coconut',

'Apple', '15'])