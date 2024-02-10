function solve() {
   const products = document.querySelectorAll('div.product');
   const outputField = document.querySelector('textarea');
   let receipt = outputField.textContent;
   let totalPrice = 0;
   let shoppingCart =[];
   
   for (let product of products) {
      let name = product.querySelector('.product-title').textContent;
      let price = Number(product.querySelector('.product-line-price').textContent);
      let button = product.querySelector('.add-product');
      button.addEventListener('click', addToCart);
      
      function addToCart() {
         receipt = receipt + `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
         outputField.textContent = receipt; 
         totalPrice += price;
         if(!shoppingCart.includes(name)){
            shoppingCart.push(name);
         }
      }   
   }

   const checkOutBtn = document.querySelector(".checkout");
   checkOutBtn.addEventListener('click', checkingOut);
   function checkingOut(){
      receipt = receipt + `You bought ${shoppingCart.join(", ")} for ${totalPrice.toFixed(2)}.`
      outputField.textContent = receipt;
      checkOutBtn.disabled = true;
      let buttons = document.querySelectorAll('.add-product');
      for(btn of buttons){
         btn.disabled = true;
      }

   }
   
}