/*function task(year, month, day){
    let currentDate = new Date(year, month, day);
    currentDate.setDate(currentDate.getDate() - 1);
    let pastYear = currentDate.getFullYear();
    let pastMonth = currentDate.getMonth();
    let pastDay = currentDate.getDate();
    console.log(`${pastYear}-${pastMonth}-${pastDay}`)
   
}
task(2016, 9, 30)*/

function getPreviousDay(year, month, day) {
    let currentDate = new Date(year, month - 1, day);
    currentDate.setDate(currentDate.getDate() - 1);
    let previousYear = currentDate.getFullYear();
    let previousMonth = currentDate.getMonth() + 1; 
    let previousDay = currentDate.getDate();
    let result = `${previousYear}-${previousMonth}-${previousDay}`;

    console.log(result);
}

getPreviousDay(2016, 9, 30)