const fs = require("fs")

let students = [
    { name: "Amit", age: 24 },
    { name: "Shalini", age: 12 },
    { name: "Rahul", age: 10 }
];
let largestAge = 0;
let largestName = "";
let secondLargestAge = 0;
let secondLargestName = "";

for(let i= 0; i<students.length; i++){

    if(students[i].age > largestAge){
       
        secondLargestName =largestName
        secondLargestAge = largestAge
       
       largestAge = students[i].age
       largestName = students[i].name
    
    }

    else if (students[i].age>secondLargestAge){
        secondLargestAge = students[i].age;
        secondLargestName = students[i].name;
    }

}
console.log(secondLargestName +" - "+ secondLargestAge)
