const fs =require("fs")
const XLSX = require("xlsx")


let workbook = XLSX.readFile("fileHandling/readstudents.xlsx")
let worksheet = workbook.Sheets["Sheet1"]
let students = XLSX.utils.sheet_to_json(worksheet)

for(let i=0; i<students.length; i++){
    if(students[i].Name =="Rahul"){
        students[i].Age =20;
    }

}

let studentsData = XLSX.utils.json_to_sheet(students)
workbook.Sheets["Sheet1"] = studentsData;
XLSX.writeFile(workbook, "fileHandling/readstudents.xlsx");

console.log("File updated")