function task(input){
    let grade = Number(input);
    let mark ="";
    if(grade < 3){
        mark = "Fail";
        grade = 2;
    }
    else if(grade >= 3 && grade < 3.50){
        mark = "Poor";
    }
    else if(grade >= 3.50 && grade < 4.50){
        mark = "Good";
    }
    else if(grade >= 4.50 && grade < 5.50){
        mark = "Very good";
    }
    else{
        mark = "Excellent";
    }
    if(grade > 2){
    console.log(`${mark} (${grade.toFixed(2)})`);
    }
    else{
        console.log(`${mark} (${grade})`);
    }

}
task(3.33)
task(4.50)
task(2.99)