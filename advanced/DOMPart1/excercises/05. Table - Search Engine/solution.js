function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let searchRef = document.getElementById("searchField");
   const tableRows = Array.from(document.querySelectorAll("tbody tr"));

   function onClick() {
      let searchText = searchRef.value ;
      for(let row of tableRows){
         let tableData = Array.from(row.querySelectorAll("td"));
         for(let data of tableData){
            if(data.textContent.includes(searchText)){
               row.classList.add("select");
               break;
            }
            else{
               row.classList.remove("select");
            }
         }
      }
      searchRef.value = "";


   }
}