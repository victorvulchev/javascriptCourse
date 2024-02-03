function task(arr){
    arr.shift();
    let towns  =[]
    for(let i of arr){
        let [town, latitude, longitude] = i.split('|').map(word => word.trim()).filter(word => word !== '');
        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));

        towns.push({Town : town, Latitude : latitude, Longitude : longitude});

    }
    console.log(JSON.stringify(towns))
}

task(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])