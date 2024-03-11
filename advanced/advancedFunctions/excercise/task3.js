function task() {
    let first = 0;
    let second = 1;

    function fibonacci() {
        let next = first + second;
        first = second;
        second = next;
        return first;
    }

    return fibonacci;
}

let p = task();
console.log(p());
console.log(p());
console.log(p());
console.log(p());
console.log(p());
console.log(p());
console.log(p());