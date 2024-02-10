function generateReport() {
    const infoRef = document.querySelectorAll("tr th");
    const empRef = document.querySelectorAll("tbody tr");
    let outputRef = document.getElementById("output");
    let fullEmpList = [];
    
    for(let i = 0; i < empRef.length; i++){
        let currentEmp = empRef[i].querySelectorAll("td");
        let objEmp = {}
        for(let j = 0; j < infoRef.length; j++){
            let key = infoRef[j].textContent.toLocaleLowerCase().trim();
            let val = currentEmp[j].textContent;
            objEmp[key] = val;
        }
        fullEmpList.push(objEmp);
    }
    let desiredList = [];
    for(let emp of fullEmpList){
        let desiredEmp = {}
        for(let el of infoRef){
            let isChecked = el.querySelector('input[type="checkbox"]').checked;
            if(isChecked){
                let key = el.textContent.toLocaleLowerCase().trim();
                desiredEmp[key] = emp[key];
            }
    
        }
        desiredList.push(desiredEmp);
    }
    let toPrint = JSON.stringify(desiredList);
    outputRef.value = toPrint;


}
    //console.log(empRef[0].querySelectorAll("td")[0]);
    //console.log(infoRef[0].textContent.toLocaleLowerCase());
    //console.log(infoRef[0].querySelector('input[type="checkbox"]').checked);