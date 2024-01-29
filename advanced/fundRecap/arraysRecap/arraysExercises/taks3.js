function task(arr) {
    let newArr = [];
    let numb = 0;
    for (let i = 0; i < arr.length; i++) {
        numb++;
        let current = arr[i];
        switch (current) {
            case "add": newArr.push(numb); break;
            case "remove": newArr.pop(); break;
        }
    }
    if (newArr.length > 0) { console.log(newArr.join("\n")) }
    else {
        console.log("Empty")
    }

}

task(['remove', 'remove', 'remove'])