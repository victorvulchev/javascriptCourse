function task(a, b, c){
    let numbs = [a, b, c];
    let biggest = Math.max(...numbs)
    console.log(`The largest number is ${biggest}.`)
}

task(5, -3, 16)