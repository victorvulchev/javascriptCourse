function task(arr){
    let newArr = [];
    for(let i =0; i < arr.length; i++){
        if( i % 2 != 0){
            newArr.push(arr[i]);
        }
    }
    let doubled = newArr.map(num => num*2);
    doubled.reverse();
    console.log(doubled.join(" "))
}