const fs = require("fs");

let data = fs.readFileSync("fileHandling/student.json", "utf-8");

let students = JSON.parse(data);

for(let i =0; i<students.length; i++){
    if(students[i].name== "Rahul")
    {
        students.splice(i,1);
    }
}

let studentData = JSON.stringify(students)
fs.writeFileSync("fileHandling/student.json", studentData)
console.log("Student Updated")