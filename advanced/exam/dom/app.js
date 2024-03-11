window.addEventListener("load", solve);

function solve() {
  const nameRef = document.getElementById("snowman-name");
  const heightRef = document.getElementById("snowman-height");
  const locationRef = document.getElementById("location");
  const creatorRef = document.getElementById("creator-name");
  const specialAttributeRef = document.getElementById("special-attribute");
  const addButton = document.querySelector(".add-btn");
  const previewRef = document.querySelector(".snowman-preview");
  const snowListRef = document.querySelector(".snow-list")

  addButton.addEventListener('click', onAdd);

  function onAdd(e) {
    e.preventDefault();
    if (nameRef.value === '' || heightRef.value === '' || locationRef.value === '' || creatorRef.value === '' || specialAttributeRef.value === '') {
      return;
    }

    let element = document.createElement("li");
    element.setAttribute('class', "snowman-info");

    let div = document.createElement("div");
    div.setAttribute("class", "btn-container");

    let article = document.createElement("article");

    let name = document.createElement("p");
    name.textContent = "Name: " + nameRef.value;

    let height = document.createElement("p");
    height.textContent = "Height: " + heightRef.value + "cm";

    let location = document.createElement("p");
    location.textContent = "Location: " + locationRef.value;

    let creator = document.createElement("p");
    creator.textContent = "Creator: " + creatorRef.value;

    let spAbility = document.createElement("p");
    spAbility.textContent = "Special Attribute: " + specialAttributeRef.value;

    let editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit-btn");
    editBtn.textContent = "Edit";

    let nxtBtn = document.createElement("button");
    nxtBtn.setAttribute("class", "next-btn");
    nxtBtn.textContent = "Next";

    article.appendChild(name);
    article.appendChild(height);
    article.appendChild(location);
    article.appendChild(creator);
    article.appendChild(spAbility);

    div.appendChild(editBtn);
    div.appendChild(nxtBtn);

    element.appendChild(article);
    element.appendChild(div);

    previewRef.appendChild(element);

    let editName = nameRef.value
    let editheight =heightRef.value
    let editLocation = locationRef.value
    let editCreator = creatorRef.value
    let editSpAbil = specialAttributeRef.value
    nameRef.value = ""
   heightRef.value = ""
   locationRef.value = ""
   creatorRef.value = ""
   specialAttributeRef.value = ""

   addButton.disabled = true;

   editBtn.addEventListener('click', onEdit);
    function onEdit(e) {
      nameRef.value = editName
      heightRef.value = editheight
      locationRef.value = editLocation
      creatorRef.value = editCreator
      specialAttributeRef.value = editSpAbil

      element.remove()
      addButton.disabled = false;

    }
    nxtBtn.addEventListener("click", onNext)
    function onNext(e) {
      let element = document.createElement("li");
      element.setAttribute('class', "snowman-content");

      let article = document.createElement("article");

      let name = document.createElement("p");
      name.textContent = `Name:\n`+editName;

      let height = document.createElement("p");
      height.textContent = `Height:\n` + editheight;

      let location = document.createElement("p");
      location.textContent = `Location:\n`+editLocation;

      let creator = document.createElement("p");
      creator.textContent = `Creator:\n` +editCreator;

      let spAbility = document.createElement("p");
      spAbility.textContent = `Special Attribute:\n` +editSpAbil;

      let sendbutton = document.createElement("button");
      sendbutton.setAttribute("class", "send-btn")
      sendbutton.textContent = "Send";
      article.appendChild(name);
      article.appendChild(height);
      article.appendChild(location);
      article.appendChild(creator);
      article.appendChild(spAbility);
      article.appendChild(sendbutton);

      element.appendChild(article);
      snowListRef.appendChild(element)

      
    }



  }
  
 
}
