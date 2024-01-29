function task(arr){
    let biggestOne = Number.MIN_SAFE_INTEGER;
    let newArr = arr.reduce((acc, el)=>{
        if(el >= biggestOne){
            biggestOne = el;
            acc.push(biggestOne);
        }
        return acc;
    }, [])
    console.log(newArr)
}

task([1, 3, 8, 4, 10, 12, 3, 2, 24])