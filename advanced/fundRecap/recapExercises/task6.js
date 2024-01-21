function task(speed, area){
    let limit = 0;
    switch(area){
        case"motorway": limit = 130; break;
        case"interstate": limit = 90; break;
        case"city": limit = 50; break;
        default: limit = 20; break;
    }
    let diff = speed - limit;
    if(diff <= 0){
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
    else{
        let status = "";
        if(diff <= 20){
            status = "speeding";
        }
        else if(diff <= 40){
            status = "excessive speeding";
        }
        else{
            status = "reckless driving"
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

task(40, 'city')
task(21, 'residential')
task(120, 'interstate')
task(200, 'motorway')