function task(input){
    let racers = {};
    let names = input.shift().split(", ");
    for(let i of names){
        racers[i] = 0;
    }
    for(let i of input){
        if(i == "end of race"){
            break;
        }
        let matchName = (i.match(/[A-Za-z]/g)).join("");
        let matchDistance = i.match(/[\d]/g).join("");
        let currentDistance = 0;
        for(j of matchDistance){
            currentDistance += Number(j);
        }
        if(racers.hasOwnProperty(matchName)){
        racers[matchName] = racers[matchName] + currentDistance;
        }
    }
    let sorted = Object.entries(racers).sort((a,b) => b[1]-a[1])
    let top3 = []
    let counter = 0;
    for(let[k,v] of sorted){
        if(counter == 3){
            break;
        }
        counter++;
        top3.push(k)
    }
    for(let i = 0; i <=3; i++){
        console.log(`1st place: ${top3[i]}`);
        i++
        console.log(`2nd place: ${top3[i]}`);
        i++
        console.log(`3rd place: ${top3[i]}`);
        break;
    }
}
task(['George, Peter, Bill, Tom',

'G4e@55or%6g6!68e!!@ ',

'R1@!3a$y4456@',

'B5@i@#123ll',

'G@e54o$r6ge#',

'7P%et^#e5346r',

'T$o553m&6',

'end of race'])