function task(input){
    class Movie{
        constructor(name, director, date){
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }
    let movieList = []
    for(let i = 0; i < input.length; i++){
        let currentPrompt = input[i].split(" ");
        let first = currentPrompt.shift();
        if(first == "addMovie"){
            let movieTitle = currentPrompt.join(" ");
            movieList.push(new Movie(movieTitle));
        }
        else{
            currentPrompt.unshift(first);
            let ogPrompt = currentPrompt.join(" ");
            if(ogPrompt.includes("directedBy")){
                let newPrompt = ogPrompt.split(" directedBy ");
                let movieName = newPrompt.shift();
                let director = newPrompt.shift();
                for(j of movieList){
                    if(j.name == movieName){
                        j.director = director;
                    }
                }
            }
            else{
                let newPrompt = ogPrompt.split(" onDate ");
                let movieName = newPrompt.shift();
                let date = newPrompt.shift();
                for(j of movieList){
                    if(j.name == movieName){
                        j.date = date;
                    }
                }
            }
        }
    }
    for(i of movieList){
        let hasEverything = true
        for(key in i){
            if(i[key] == undefined){
                hasEverything = false;
                break;
            }
        }
        if(hasEverything){
            console.log(JSON.stringify(i));
        }
    }
}
task([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'
    
    ])