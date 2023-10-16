function task(arr){
    let inventory = arr[0].split(" ");
    for(let i = 1; i < arr.length; i++){
        let currentElement = arr[i];
        let toDo = currentElement.split(" ");
        let command = toDo[0];
        let equipment = toDo[1];
        let idx = inventory.indexOf(equipment);
        switch(command){
            case"Buy":
            if(!inventory.includes(equipment)){
                inventory.push(equipment);
            }
            break;
            case"Trash":
            if(inventory.includes(equipment)){
                inventory.splice(idx, 1);
            }
            break;
            case"Repair":
            if(inventory.includes(equipment)){
                let repaired = inventory.splice(idx, 1);
                inventory.push(repaired);
            }
            break;
            default:
                let upgraded = equipment.split("-");

                if(inventory.includes(upgraded[0])){
                    idx = inventory.indexOf(upgraded[0])
                    inventory.splice(idx + 1, 0, `${upgraded[0]}:${upgraded[1]}`);
                }

        }
    }
    console.log(inventory.join(" "))
}
task(['SWORD Shield Spear',

'Trash Bow',

'Repair Shield',

'Upgrade Helmet-V'])