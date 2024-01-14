function task(arr){
    let text = arr.shift();
    let current = arr.shift();
    while(current != "Done"){
        let[command, one, two] = current.split(" ");
        switch(command){
            case"Change":
                while(text.includes(one)){
                   text = text.replace(one, two);
                }
                console.log(text)
                break;
            case"Includes":
                text.includes(one)? console.log("True") : console.log("False");
                break;
            case"End":
                text.endsWith(one)? console.log("True") : console.log("False");
                break;
            case"Uppercase":
                text = text.toUpperCase();
                console.log(text);
                break;
            case"FindIndex":
                let index = text.indexOf(one);
                console.log(index);
                break;
            case"Cut":
                let start = Number(one)
                let end= Number(one) + Number(two)
                let removed = text.slice(start, end);
                text = text.slice(0,start) + text.slice(end);
                console.log(removed)
                break;
        }
        current = arr.shift();
    }
}
task(["*S0ftUni is the B3St Plac3**",

"Change 2 o",

"Includes best",

"End is",

"Uppercase",

"FindIndex P",

"Cut 3 7",

"Done"])