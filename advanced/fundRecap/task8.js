function task(month, year){
    let days = new Date(year, month, 0).getDate();
    console.log(days);
}

task(11, 2021)