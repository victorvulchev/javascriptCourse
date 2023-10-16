function task(arr){
    let newArr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b))
    console.log(newArr.join("\n"))
}
task(['alpha',

'beta',

'gamma'])
task(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])