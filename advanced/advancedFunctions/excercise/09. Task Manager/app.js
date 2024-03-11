function solve() {
    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", submitEventHandler);

    const [addTask, openTask, inProgress, complete] = document.querySelectorAll("section");

    btnHandlerEnum = {
        start:function (e){
            let currentArt = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement)
            currentArt.innerHTML += getBTNPartial({classes: "red", text: "delete"}, {classes: "orange", text: "Finish"})
            let btns = currentArt.querySelectorAll("button");
            addEventListenerToBtn(btns);
            inProgress.children[1].appendChild(currentArt);
        },
        finish:function (e){
            let currentArt = e.target.parentElement.parentElement;
            removeBtn(e.target.parentElement)
            complete.children[1].appendChild(currentArt);
        },
        delete:function (e){
            e.target.parentElement.parentElement.remove();
        }
    }
    function submitEventHandler(e){
        e.preventDefault();
        let formElements = e.target.elements
        let taskName = formElements[0].value;
        let desc = formElements[1].value;
        let date = formElements[2].value;

        if(!taskName || !desc || !date){
            return;
        }
        else{
            createArticle(taskName, desc, date);
            clearForm(formElements);
        }
    }
    function clearForm(formElements){
        formElements[0].value = "";
        formElements[1].value = "";
        formElements[2].value = "";
    }

    function createArticle(taskName, desc, date){ 
        let newArticle = document.createElement("article");
        newArticle.innerHTML = getArticleTemp(taskName, desc, date);
        openTask.children[1].appendChild(newArticle);
        let btns = newArticle.querySelectorAll("button");
        addEventListenerToBtn(btns);

    }

    function getArticleTemp(name, desc, date){
        return `<h3>${name}</h3>` +
                `<p>Description: ${desc}</p>` +
                `<p>Due Date: ${date}</p>` +
                getBTNPartial({classes: "green", text: "Start"}, {classes: "red", text: "Delete"})
    }

    function getBTNPartial(btn1, btn2){
        return `<div class="flex">` +
                    `<button class=${btn1.classes}>${btn1.text}</button>` +
                    `<button class="${btn2.classes}">${btn2.text}</button>` +
                `</div>`

    }

    function addEventListenerToBtn(btns){
        Array.from(btns).forEach(btn => btn.addEventListener("click", clickEventHandler))
    }

    function clickEventHandler(e){
        let currentAction = e.target.innerText.toLowerCase();
        btnHandlerEnum[currentAction](e)

    }

    function removeBtn(target){
        target.remove();
    }
}