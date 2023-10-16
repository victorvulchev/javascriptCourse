function task(arr){
    let list = [];
    for(let i = 0; i < arr.length; i++){
        let currentPerson = arr[i].split(" ");
        let name = currentPerson[0];
        let willGo = currentPerson[2];
        if(willGo == "going!"){
            list.includes(name)? console.log(`${name} is already in the list!`) : list.push(name);
        }
        else{
            list.includes(name)? list = list.filter((x) => x !== name) : console.log(`${name} is not in the list!`)
        }
    }
    for(let i = 0; i < list.length; i++){
        console.log(list[i]);
    }
}
task(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!'])
