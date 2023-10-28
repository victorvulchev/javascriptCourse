function task(input) {
    class Music {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;

        }
    }
    playlist = [];
    let numbOfSongs = Number(input[0]);
    let toPrint = input[input.length - 1];
    for (let i = 1; i <= numbOfSongs; i++) {
        let currentSong = input[i].split("_");
        let [typeList, name, time] = [currentSong[0], currentSong[1], currentSong[2]];
        playlist.push(new Music(typeList, name, time));
    }

    for (let i of playlist) {
        if (toPrint == "all" || i.typeList == toPrint){
            console.log(i.name); 
        }
    }

}

task([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])