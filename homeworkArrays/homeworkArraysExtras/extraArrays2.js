function task(arr){
    let newArr = [];
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        counter++;
        let action = arr[i];
        action === "add" ? newArr.push(counter) : newArr.pop();
    }
    return newArr.join(" ");
}