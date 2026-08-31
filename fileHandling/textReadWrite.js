const fs = require("fs")

// fs.writeFileSync("fileHandling/student.txt", "Hello Shalini");
// console.log("File Created Successfully");
function appendStudent() {
    fs.appendFileSync("fileHandling/student.txt", "\nLearning playwright")
   
}

appendStudent();
console.log("Written Student");
