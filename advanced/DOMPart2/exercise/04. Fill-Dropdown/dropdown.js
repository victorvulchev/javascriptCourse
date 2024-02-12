function addItem() {
    const text = document.getElementById("newItemText").value;
    const val = document.getElementById("newItemValue").value;
    let newOption = document.createElement('option');
    newOption.textContent = text;
    newOption.value = val;
    if(newOption.value.length == 0){
        return
    }
    const menu = document.getElementById('menu');
    menu.appendChild(newOption);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}
/*const button = document.querySelector('input[type="button"]');
    button.addEventListener('click', clear);
    
    function clear(event){
        let parent = 
        
    } */