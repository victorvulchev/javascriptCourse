function task(arr){
    let sections = arr.length;
    let construction = arr.map(Number);
    let concretePerDay = [];
    while(true){
        let workingSections = 0;
        let finishedSections = 0;
        for(let i= 0; i < construction.length; i++){
            if(construction[i] < 30){
                construction[i] = construction[i] + 1;
                workingSections++;
            }
            else{
                finishedSections++;
            }
        }
        if(finishedSections == sections){
            break;
        }
        let dailyConcrete = workingSections * 195;
        concretePerDay.push(dailyConcrete);
    }
    let totalConcrete = 0;
    for(let i of concretePerDay){
        totalConcrete += i;
    }
    let totalPesos = totalConcrete * 1900;
    console.log(concretePerDay.join(", "))
    console.log(`${totalPesos} pesos`)
}

task([21, 25, 28])