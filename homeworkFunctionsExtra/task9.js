function task(input){
    let percent = input / 10;
    let completion = "%".repeat(percent);
    let loading = ".".repeat(10 - percent);
    let bar = completion + loading;

    if(input < 100){
        console.log(`${input}% [${bar}]`);
        console.log("Still loading...")
    }
    else{
        console.log("Complete!")
        console.log(`${input}% [${bar}]`);
    }
}
task(30)
task(50)
task(100)