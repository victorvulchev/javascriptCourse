function addItem() {
    const inputRef = document.getElementById("newItemText");
    let textToAdd = inputRef.value ;
    if(inputRef.value.length == 0){
        return;
    }
    const li = document.createElement("li");
    li.textContent = textToAdd;
    const delBtn = document.createElement('a');
    delBtn.textContent = '[Delete]';
    delBtn.href = '#';
    li.appendChild(delBtn);

    delBtn.addEventListener('click', handler);
    function handler(event){
        /*const target = event.target.parentElement;
        target.remove()*/
        li.remove();
    }

    const list = document.getElementById("items");
    list.appendChild(li);
    inputRef.value = "";
}