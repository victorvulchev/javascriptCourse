function create(words) {
   const space = document.getElementById('content');
   for(let word of words){
      let div = document.createElement("div");
      let paragraph = document.createElement("p")
      paragraph.textContent = word;
      paragraph.style.display = "none"
      div.addEventListener('click', show);
      function show(){
         paragraph.style.display= "block"
      }
      div.appendChild(paragraph);
      space.appendChild(div);

   }
}