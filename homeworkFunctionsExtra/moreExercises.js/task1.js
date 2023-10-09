/*· soap – add 10 to the value

· water – increase the value by 20%

· vacuum cleaner – increase the value by 25%

· mud – decrease the value by 10 */

function task(input){
    let cleanliness = 0;
    for(let i = 0; i < input.length; i++){
        switch(input[i]){
            case"soap": cleanliness += 10; break;
            case"water": cleanliness += cleanliness * 0.2; break;
            case"vacuum cleaner": cleanliness += cleanliness * 0.25; break;
            default: cleanliness -= cleanliness * 0.10; break;
        }
    }
    console.log(`The car is ${cleanliness.toFixed(2)}% clean.`)
}
task(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',

'water'])
task(["soap", "water", "mud", "mud", "water", "mud",

"vacuum cleaner"])