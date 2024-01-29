function task(arr){
    let sorted = arr.sort((a,b)=> a.localeCompare(b));
    let indx = 1;
    arr.forEach(el => {
        console.log(`${indx}.${el}`);
        indx++
    });
}

task(["John",

"Bob",

"Christina",

"Ema"])