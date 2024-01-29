function task(){
    return {
        hasClima(obj){
            obj["temp"] = 21;
            obj["tempSettings"] = 21;
            obj["adjustTemp"] = function(){
                if(this.temp < this.tempSettings){
                    this.temp++;
                }
                else{
                    this.temp--;
                }
            }
        },
        hasAudio(obj){
            obj["currentTrack"] = null;
            obj["nowPlaying"] = function(){
                if(currentTrack != null){
                console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
            }
            }
        },
        hasParktronic(obj){
            obj["checkDistance"] = function(distance){
                if(distance < 0.1){
                    console.log("Beep! Beep! Beep!");
                }
                else if(distance >= 0.1 && distance < 0.25){
                    console.log("Beep! Beep!");
                }
                else if(distance >= 0.25 && distance < 0.5){
                    console.log("Beep!");
                }

            }
        }


    }
}