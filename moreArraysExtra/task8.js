function task(arr, commands) {
    for (let j = 0; j < commands.length; j++) {
      let toDo = commands[j].split(" ");
      let first = toDo[0];
      let second = Number(toDo[1]);
  
      switch (first) {
        case "add":
          let numb = Number(toDo[2]);
          arr.splice(second, 0, numb);
          break;
        case "addMany":
          let args = toDo.slice(2).map(Number);
          arr.splice(second, 0, ...args);
          break;
        case "contains":
          let index = arr.indexOf(second);
          console.log(index);
          break;
        case "shift":
          for (let i = 0; i < second; i++) {
            let element = arr.shift();
            arr.push(element);
          }
          break;
        case "sumPairs":
          let newArr = [];
          for (let i = 0; i < arr.length; i += 2) {
            let el1 = arr[i];
            let el2 = arr[i + 1] || 0;
            let sum = el1 + el2;
            newArr.push(sum);
          }
          arr = newArr;
          break;
        case "remove":
          arr.splice(second, 1);
          break;
        case "print":
          console.log(`[ ${arr.join(", ")} ]`);
          break;
      }
    }
  }
  
task([2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"])
