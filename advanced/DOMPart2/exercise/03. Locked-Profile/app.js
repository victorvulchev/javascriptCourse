function lockedProfile() {
    const btns = document.querySelectorAll("button");
    for(let btn of btns){
        btn.addEventListener('click', showOrHide);
    }
    function showOrHide(event){
        let btn = event.currentTarget;
        let state = btn.textContent;
        let parent = btn.parentElement;
        let hiddenInfo = parent.querySelector('div');
        let radBtn = parent.querySelector('input[type="radio"]:checked')
        if(radBtn.value == "unlock"){
            if(state == "Show more"){
                btn.textContent = 'Hide it'
                hiddenInfo.style.display = "block"
            }
            else{
                btn.textContent = "Show more"
                hiddenInfo.style.display = "none"
            }
        }
        
    
    }
}