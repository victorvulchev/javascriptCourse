function task(input){
    let area = 0
    let type = typeof(input)
    if(type === "number"){
        area = Math.PI * input**2;
        console.log(area.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    }
}
task("name")