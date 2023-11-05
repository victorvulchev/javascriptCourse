function task(arr) {
    let students = {};

    for (let line of arr) {
        let currentStudent = line.split(" ");
        let name = currentStudent.shift();
        let grades = currentStudent.map(Number);

        if (students.hasOwnProperty(name)) {
            let currentGrades = students[name];
            students[name] = currentGrades.concat(grades);
        } else {
            students[name] = grades;
        }
    }

    for (let name in students) {
        let currentGrades = students[name];
        let gradeNumber = currentGrades.length;
        let sum = 0;
        for (let i = 0; i < gradeNumber; i++) {
            sum += currentGrades[i];
        }
        students[name] = sum / gradeNumber;
    }
    let sorted = Object.entries(students);
    sorted.sort((a,b) => a[0].localeCompare(b[0]))
    for(let [key,value] of sorted){
        console.log(`${key}: ${value.toFixed(2)}`)
    }
}
task(['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])