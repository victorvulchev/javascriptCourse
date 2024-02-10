function focused() {
    const sheets = document.querySelectorAll("div input[type='text']");
    for(let sheet of sheets){
        sheet.addEventListener('focus', isFocused);
        sheet.addEventListener('blur', isBlurred);
    }
    
    function isFocused(event){
        let input = event.target;
        input.parentElement.classList.add('focused');
    }
    
    function isBlurred(event){
        let input = event.target;
        input.parentElement.classList.remove('focused');
    }
}
/* const sheets = document.querySelectorAll("div");
    for(let sheet of sheets){
        sheet.addEventListener("focus", getHighlited);
        sheet.addEventListener('blur', notHighlighted);
        function getHighlited(event){
            let sheet = event.target;
            sheet.classList.add('focused');
        }
        function notHighlighted(event){
            let sheet = event.target;
            sheet.classList.remove('focused');
        }
    }*/