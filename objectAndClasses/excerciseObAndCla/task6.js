function task(arr) {
    let dictionary = [];
    for (let i = 0; i < arr.length; i++) {
        let object = JSON.parse(arr[i]);
        let bool = true
        for (k of dictionary) {
            for (let key in k) {
                if (key in k && key in object) {
                    k[key] = object[key]
                    bool = false;
                }
            }
        }
        if (bool) {

            dictionary.push(object);

        }
    }
    dictionary.sort((a, b) => {
        keyA = Object.keys(a)[0];
        keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB)})
    for(i of dictionary){
        for (let [key, value] of Object.entries(i)){
            console.log(`Term: ${key} => Definition: ${value}`)
        }
    }
}
task([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'

])