function task(n, k) {
    let arr = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            if (i - j >= 0) {
                sum += arr[i - j];
            }
        }
        arr.push(sum);
    }

    console.log(arr.join(" "));
}
task(6, 3)