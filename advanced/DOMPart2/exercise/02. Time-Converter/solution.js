function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('input[type="button"]'));
    for(let btn of buttons){
        btn.addEventListener('click', convertHandler);
        
    }
    function convertHandler(event){
        let currentInput = event.currentTarget.parentElement.children[1];
        let value = currentInput.value;
        let unit = currentInput.id;
        switch(unit){
            case"days":propVal(value);
                break;
            case"hours": propVal(value / 24);
                break;
            case"minutes": propVal(value / 24 /60);
                break;
            case"seconds": propVal(value / 24 / 60 / 60);
                break;
        }
    }
    function propVal(days){
        let inputs = document.querySelectorAll('input[type="text"]');
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }

}