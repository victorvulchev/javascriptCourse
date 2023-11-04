function task(arr1, arr2){
    class Product{
        constructor(name, quantity){
            this.name = name;
            this.quantity = Number(quantity);
        }
        display(){
            console.log(`${this.name} -> ${this.quantity}`)
        }
    }
    let inventory = [];
    for(let i = 0; i < arr1.length; i+=2){
        let product = arr1[i];
        let quantity = Number(arr1[i+1]);
        inventory.push(new Product(product, quantity));

    }
    for(let i = 0; i < arr2.length; i+=2){
        let product = arr2[i];
        let quantity = Number(arr2[i+1]);
        let inStock = false;
        for(j of inventory){
            if(j.name == product){
                j.quantity = j.quantity + quantity;
                inStock = true;

            }
        }
        if(!inStock){
            inventory.push(new Product(product, quantity))
        }
    }
    for(i of inventory){
        i.display();
    }
}
task([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])