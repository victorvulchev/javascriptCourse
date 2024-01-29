function task(arr){
    let newArr =[];
    let times = arr.length
    for(let i = 0; i < times; i++){
        if(i % 2 == 0){
            let smallest = arr.reduce((min, el) =>{
                return el < min? el : min;

            }, arr[0])
            newArr.push(smallest);
            let index = arr.indexOf(smallest);
            arr.splice(index, 1)
        }
        else{
            let biggest = arr.reduce((max, el) =>{
                return el > max? el : max;

            }, arr[0])
            newArr.push(biggest);
            let index = arr.indexOf(biggest);
            arr.splice(index, 1)

        }
    }
    console.log(newArr);
}

task([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
task([1, 65, 3, 52, 48, 63, 31, -3, 18, 18])