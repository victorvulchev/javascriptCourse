function addItem() {
    const inputRef = document.getElementById("newItemText");
    let textToAdd = inputRef.value ;
    if(inputRef.value.length == 0){
        return;
    }
    const li = document.createElement("li");
    li.textContent = textToAdd;
    const list = document.getElementById("items");
    list.appendChild(li);
    inputRef.value = "";
}