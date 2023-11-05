function task(arr){
    let meetings = {};
    while(arr.length > 0){
        let currentMeeting = (arr.shift()).split(" ");
        let day = currentMeeting.shift();
        let name = currentMeeting.shift();
        if(meetings.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }
        else{
            console.log(`Scheduled for ${day}`)
            meetings[day] = name;
        }
    }

    for(let [key, value] of Object.entries(meetings)){
        console.log(`${key} -> ${value}`)
    }
}
task(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])