function solve() {
  const [inputTextRef, resultTextRef] = document.querySelectorAll("textarea");
  const [generateBtnRef, buyBtnRef] = document.querySelectorAll("button");
  const tableRef = document.querySelector("tbody");
  generateBtnRef.addEventListener('click', generateInputHandler);
  buyBtnRef.addEventListener('click', buyHandler);

  function generateInputHandler(e){
    let data = JSON.parse(inputTextRef.value);

    for(let item of data){
      createRowAndAppend(item);
    }
  }

  function createRowAndAppend(item){
    const tr = document.createElement("tr");
    tr.innerHTML += createTableData(`<img src=${item.img}>`);
    tr.innerHTML += createTableData(`<p>${item.name}</p>`);
    tr.innerHTML += createTableData(`<p>${item.price}</p>`);
    tr.innerHTML += createTableData(`<p>${item.decFactor}</p>`);
    tr.innerHTML += createTableData(`<input type="checkbox">`);
    tableRef.appendChild(tr);
  }

  function createTableData(data){
    return `<td>${data}</td>`
  }

  function buyHandler(e){
    let name = [];
    let price = 0;
    let sumDecFactor = 0;
    let selectedRows = document.querySelectorAll("input[type='checkbox']:checked");
    for(let checkbox of selectedRows){
      let [imgRef, nameRef, priceRef, decFactorRef] = Array.from(checkbox.parentElement.parentElement.children);
      let nameValue = nameRef.children[0].textContent;
      name.push(nameValue);
      let priceValue = Number(priceRef.children[0].textContent);
      price += priceValue
      let decFactorValue = Number(decFactorRef.children[0].textContent);
      sumDecFactor += decFactorValue;

    }
    let res = "Bought furniture: ";
    res += name.join(', ');
    res += "\n";
    res += `Total price: ${price.toFixed(2)}\n`
    res += `Average decoration factor: ${sumDecFactor / name.length}`

    resultTextRef.value = res
  }
}