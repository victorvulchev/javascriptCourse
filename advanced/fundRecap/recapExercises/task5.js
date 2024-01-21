function task(steps, footprintLength, speed){
    let fullDistance = steps * footprintLength;
    let additionalMinutes = Math.floor(fullDistance / 500);
    let distanceInSeconds = (fullDistance / (speed*1000/3600)) + (additionalMinutes * 60);
    let hours = Math.floor(distanceInSeconds / 3600);
    let minutes = Math.floor((distanceInSeconds % 3600)/ 60);
    let seconds = Math.floor(distanceInSeconds % 60);

    console.log(`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`)
}

task(4000, 0.60, 5)