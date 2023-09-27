let variable1 = "string"
let variable2 = 2
let variable3 = true
let variable4 = null

let variableArray = ["alma", "barack", "szilva", "vegyes"];
let variableArray2 = [1, 2, 3];
let variableArray3 = ["autó", true, 62, null];
let variableArray4 = [variable1, variable2, variable3]

console.log(variableArray3[2])

variableArray2[0] = 9
console.log(variableArray2) 

console.log(variableArray3.length)

let counter = 0
while (counter <= 5) {
    console.log(counter)
    counter = counter + 1 // vagy counter ++
}

for (let counter = 0; counter <= 5; counter++) {
    console.log(counter);   
}

for (let index = 0; index < variableArray.length; index++) {
    console.log(variableArray[index])
    
}