const test = require('./utils');
    
//task 1

let mat1 = [
    [3, 5, 2],
    [4, 7, 8],
    [2, 4, 5]
    
];

let mat2 = [
    [2, 4, 6],
    [1, 3, 5],
    [2, 5, 8]
  
];

console.log(test.matriceProduct(mat1, mat2));

//task 2

let mat3 = [
    [8, 2, 1],
    [4, 3, 7],
    [2, 5, 9]
];

let mat4 = [
    [3, 6, 9],
    [2, 5, 1],
    [3, 1, 7]
    
];
console.log(test.sumOfMatrices(mat3, mat4));


//task 3

let mat5 =[
    [5, 6, 2],
    [6, 2, 3],
    [4, 4, 7]
];

console.log(test.sumOfEachRow(mat5));