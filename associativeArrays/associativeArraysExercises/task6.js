function task(arr) {
    let companies = {};

    while (arr.length !== 0) {
        let current = arr.shift();
        let [name, emp] = current.split(" ->");
        emp = [emp];

        if (!companies.hasOwnProperty(name)) {
            companies[name] = new Set(emp);
        } else {
            companies[name].add(emp[0]);
        }
    }

    let entries = Object.entries(companies);
    let sortedEntries = entries.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [key, value] of sortedEntries) {
        console.log(`${key}`);
        for (let employeeId of value) {
            console.log(`--${employeeId}`);
        }
    }
}


task([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])