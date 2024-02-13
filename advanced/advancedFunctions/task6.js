function task(input) {
    let list = [];
    let obj = {
        add: (a) => { list.push(a) },
        remove: (a) => { list = list.filter(x => (x != a)) },
        print: () => { console.log(list.join(",")) },
    }

    for (let i of input) {
        let [command, word] = i.split(" ");
        switch (command) {
            case "add": obj.add(word); break;
            case "remove": obj.remove(word); break;
            case "print": obj.print(); break
        }
    }


}

task(['add hello', 'add again', 'remove hello', 'add again', 'print'])