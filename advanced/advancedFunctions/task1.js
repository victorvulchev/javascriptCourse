function solve(area, vol, input){
    let arrOfObj = JSON.parse(input);
    let res = [];
    for(obj of arrOfObj){
        let a = area.call(obj);
        let v = vol.call(obj);
        res.push({area: a, volume: v})
    }
    return res
}
function area() {

    return Math.abs(this.x * this.y);
    
};
function vol() {

return Math.abs(this.x * this.y * this.z);

};

solve(area, vol, `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`)