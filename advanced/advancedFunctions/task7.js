function task(input){
    let objects = [];
    function create(name){
        objects.push({name: name});
    }
    function inherit(obj, toInherit){
        let paretn = getObject(toInherit)
        let child = getObject(obj);
        let inheritors=[paretn];
        if(paretn.hasOwnProperty("inheriter")){
            inheritors.push(paretn.inheriter)
        }
        child["inheriter"] = inheritors
    }
    function set(name, key, value){
        let obj = getObject(name);
        obj[key] = value;

    }
    function print(input){
        let toPrint = getObject(input);
        if(toPrint.hasOwnProperty("inheriter")){
            let parents = toPrint.inheriter;
            for(parent of parents){
                let tempParent = parent;
                delete tempParent.name;
                if(tempParent.hasOwnProperty("inheriter")){
                    delete tempParent.inheriter;
                }
                for(key in tempParent){
                    toPrint[key] = tempParent[key];
                }
                console.log(toPrint);
            }
            delete toPrint.inheriter;
            delete toPrint.name;
            console.log(Object.keys(toPrint).map(key => `${key}:${toPrint[key]}`).join(","));
        }
        else{
            delete toPrint.name;
            console.log(Object.keys(toPrint).map(key => `${key}:${toPrint[key]}`).join(","));
        }
    }


    function getObject(toFind){
        let match = objects.filter(x =>(x.name == toFind))[0]
        return match;
    }

    for(let i of input){
        let commandList = i.split(" ");
        if(commandList.length == 2){
            let [command, obj] = commandList;
            switch(command){
                case"create": create(obj);break;
                case"print": print(obj);break;
            }
        }
        else{
            let[command, obj, keyOrCom, objOrVal] = commandList;
            switch(command){
                case"create":create(obj); inherit(obj, objOrVal); break;
                case"set": set(obj, keyOrCom, objOrVal); break;
            }
        }
    }
}

task(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'])