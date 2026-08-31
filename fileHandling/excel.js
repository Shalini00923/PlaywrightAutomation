const fs = require("fs")
const XLSX = require("xlsx")
let students = [
    { name: "Amit", age: 24 },
    { name: "Shalini", age: 29 }
];

let worksheet= XLSX.utils.json_to_sheet(students);
let workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "students")
XLSX.writeFile(workbook, "fileHandling/students.xlsx");
console.log("Excel file created")