function search() {
   //debugger
   let towns = Array.from(document.querySelectorAll("ul li"));
   let searchText = document.getElementById("searchText");
   let results = document.getElementById("result");
   let matches = 0;
   for(let town of towns){
      let current = town.textContent;
      if(current.includes(searchText.value) && searchText.value != ""){
         town.style.fontWeight = "bold";
         town.style.textDecoration = "underline";
         matches++;
      }
      else{
         town.style.fontWeight = "normal";
         town.style.textDecoration = "none";
      }
   }
   searchText.value = "";
   results.textContent = `${matches} matches found`;

}
