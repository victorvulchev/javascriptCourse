//'multiply', 'divide', 'add' or 'subtract
function task(a,b, operator){
    let result = 0;
    switch(operator){
        case"multiply": result = (a, b) => a * b; break;
        case"divide": result = (a, b) => a / b; break;
        case"add": result = (a, b) => a + b; break;
        default: result = (a, b) => a - b; break;
    }
    console.log(result(a, b))

}
task(5,

    5,
    
    'multiply')