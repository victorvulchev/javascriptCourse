function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let words = text.split(" ");
  let newWords = [];
  switch(convention){
    case"Camel Case":
      for(let i = 0; i < words.length; i++){
        let current = words[i];
        current = current.toLowerCase();
        if(i == 0){
          newWords.push(current);
        }
        else{current = current.charAt(0).toUpperCase() + current.slice(1);
          newWords.push(current);}
      }
      break;
    case"Pascal Case":
    for(let i = 0; i < words.length; i++){
      let current = words[i];
      current = current.toLowerCase();
      current = current.charAt(0).toUpperCase() + current.slice(1);
      newWords.push(current);
    }
    break;
    default:
      newWords.push("Error!");
    break
       
  }
  document.getElementById("result").textContent = newWords.join("");
}