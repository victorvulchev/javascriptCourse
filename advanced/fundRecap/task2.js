function task(a, b ,c){
    let totalLenght = a.length + b.length + c.length;
    let average = Math.floor(totalLenght / 3)
    console.log(totalLenght);
    console.log(average);
}

task('chocolate', 'ice cream', 'cake')