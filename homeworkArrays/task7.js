function task(arr) {
    let longest = [];
    let i = 0;
    let command = arr[i];
    i++;

    while (i < arr.length) {
        let tempArr = [command];
        while (command == arr[i]) {
            tempArr.push(command);
            i++;
        }
        if (tempArr.length > longest.length) {
            longest = tempArr;
        }
        command = arr[i];
        i++;
    }

    console.log(longest.join(" "));
}

task([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
