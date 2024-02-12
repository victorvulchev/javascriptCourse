function encodeAndDecodeMessages() {
    const encField = document.querySelectorAll("main div")[0];
    const decField = document.querySelectorAll("main div")[1];
    const btnEnc = encField.querySelector('button');
    const btnDec = decField.querySelector('button');
    btnEnc.addEventListener('click', encodeText);
    btnDec.addEventListener('click', decodeText);
    function encodeText(e){
        let parent = e.currentTarget.parentElement;
        let text = parent.querySelector("textarea").value;
        let toEncode ="";
        for(let i = 0; i<text.length; i++){
            let asciiNumb = text[i].charCodeAt(0);
            let newChar = String.fromCharCode(asciiNumb + 1);
            toEncode = toEncode + newChar;
        }
        let grandParent = parent.parentElement;
        let otherField = grandParent.querySelectorAll("main div")[1];
        let toBeChanged = otherField.querySelector('textarea');
        toBeChanged.value = toEncode;
        e.currentTarget.parentElement.querySelector("textarea").value =""

    }

    function decodeText(e){
        let parent = e.currentTarget.parentElement;
        let text = parent.querySelector("textarea").value;
        let toDecode ="";

        for(let i = 0; i<text.length; i++){
            let asciiNumb = text[i].charCodeAt(0);
            let newChar = String.fromCharCode(asciiNumb - 1);
            toDecode = toDecode + newChar;
        }
        e.currentTarget.parentElement.querySelector("textarea").value = toDecode;

    }
}