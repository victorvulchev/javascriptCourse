function sumTable() {
    let matrix = document.querySelectorAll("table tr");
    let total = 0;
    for(let i = 1; i < matrix.length -1; i++){
        let val = matrix[i].getElementsByTagName("td")
        total += Number(val[1].textContent);
    }
    
    document.getElementById("sum").textContent = total;
    
}