class Vehicle{
    constructor(type, model, parts, fuel){
        this.type = type;
        this.model = model;
        this.parts = {
            engine : Number(parts.engine),
            power: Number(parts.power),
            quality : Number(parts.engine) * Number(parts.power)}
        this.fuel = Number(fuel);
    }
    drive(numb){
        return this.fuel = this.fuel - Number(numb);
    }
}

let parts = { engine: 6, power: 100 };

let vehicle = new Vehicle('a', 'b', parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

console.log(vehicle.parts.quality);