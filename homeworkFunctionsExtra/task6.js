function task(input){
    function onlyLetsAndNumbs(input){
        let checker = /^[a-zA-Z0-9]+$/;
        return checker.test(input);
    }
    let letsAndNumbs = onlyLetsAndNumbs(input);

    function passLength(input){
        let yourLength = input.length;
        if(yourLength >= 6 && yourLength <= 10){
            return true;
        }
        else{
            return false;
        }
    }
    let appLength = passLength(input);

    function howManyDigits(input){
        let theNumbs = "0123456789";
        counter = 0;
        for(let i = 0; i < input.length; i++){
            if(theNumbs.includes(input[i])){
                counter++;
            }
        }
        if(counter >= 2){
            return true;
        }
        else{
            return false;
        }
    }
    let digits = howManyDigits(input);

    if(letsAndNumbs && appLength && digits){
        console.log("Password is valid")
    }
    if(! appLength){
        console.log("Password must be between 6 and 10 characters")
    }
    if(! letsAndNumbs){
        console.log("Password must consist only of letters and digits")
    }
    if(! digits){
        console.log("Password must have at least 2 digits")
    }

}