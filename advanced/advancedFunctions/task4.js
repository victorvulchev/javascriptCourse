function task(data, criteria){
    let employees = JSON.parse(data);
    let [key, val] = criteria.split("-");
    let filteredEmployees = employees.filter(emp => (emp[key] == val));

    for(let i = 0; i < filteredEmployees.length; i++){
        let currentEmp = filteredEmployees[i];
        console.log(`${i}. ${currentEmp.first_name} ${currentEmp.last_name} - ${currentEmp.email}`)
    }

}

task(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female')