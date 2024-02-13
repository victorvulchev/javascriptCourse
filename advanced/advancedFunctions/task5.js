function solution(){
    let str =""
    return {
        append: function(input){
            return str += input;
        },
        removeStart: function(n){
            str = str.substring(n);
        },
        removeEnd: function(n){
            str = str.substring(0, str.length - n)
        },
        print: function(){
            console.log(str);
        } 
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();