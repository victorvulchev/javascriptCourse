function task(input){
    class Employee{
        constructor(name, number){
            this.name = name;
            this.number = number;
        }
        display(){
            console.log(`Name: ${this.name} -- Personal Number: ${this.number}`);
        }
    }
    let employees = [];
    for(let i = 0; i < input.length; i++){
        let name = input[i];
        let number = name.length;
        employees.push(new Employee(name, number));
    }
    for(let i of employees){
        i.display()
    }
}
task([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])