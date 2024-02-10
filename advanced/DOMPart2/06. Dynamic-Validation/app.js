function validate() {
    const field = document.getElementById("email");
    field.addEventListener('change', checkMail);
    
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function checkMail(){
        let input = field.value;
        if(input.length == 0){
            return
        }
        if(regex.test(input)){
            field.classList.remove('error')
        }
        else{
            field.classList.add('error')
        }
    }
    

}
/*field.addEventListener('blur', checkMail);
    
    let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

    function checkMail(){
        let input = field.value;
        if(input.length == 0){
            return
        }
        if(regex.test(input)){
            field.classList.remove('error')
        }
        else{
            field.classList.add('error')
        }
    }*/