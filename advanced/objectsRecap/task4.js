function task(library, orders){
    let fufilled = [];
    orders.forEach(order => {
        let currentObj = order.template;
        let toAdd = order.parts;
        toAdd.forEach(el =>{
            currentObj[el] = library[el];
        })
        fufilled.push(currentObj)
    });
    return fufilled;
}