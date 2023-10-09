function task(a, b){
    let char1 = a.charCodeAt(0);
    let char2 = b.charCodeAt(0);
    let start = 0;
    let end = 0;
    if(char1 > char2){
        start = char2;
        end = char1;
    }
    else{
        start = char1;
        end = char2;
    }
    let buff = "";
    for(let i = start + 1; i < end; i++){
        buff += `${String.fromCharCode(i)} `;
    }
    console.log(buff);
}

task('a',

'd')
task('#',

':')
task('C',

'#')