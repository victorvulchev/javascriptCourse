function task(arr, flav1, flav2){
    let first = arr.indexOf(flav1);
    let last = arr.indexOf(flav2) + 1;
    let newArr = arr.slice(first, last);
    return newArr;
}

task(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie')