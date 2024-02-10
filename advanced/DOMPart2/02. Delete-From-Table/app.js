function deleteByEmail() {
    const inputRef = document.querySelector('[name="email"]');
    let toSearch = inputRef.value;
    const list = document.querySelectorAll("tbody tr");
    const message = document.getElementById("result");
    if(toSearch.length == 0){
        return;
    }
    for(el of list){
        let data = el.textContent;
        if(data.includes(toSearch)){
            el.remove();
            message.textContent = "Deleted."
        }
        else{
            message.textContent = "Not found."
        }
    }

}