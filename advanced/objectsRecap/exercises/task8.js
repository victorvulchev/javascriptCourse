function rectangle(width, height, colour){
    colour = colour.charAt(0).toUpperCase() + colour.slice(1);
    return {width : Number(width), height : Number(height), color : colour,
    calcArea : function(){
        return this.width * this.height;
    }
    }
}
let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());