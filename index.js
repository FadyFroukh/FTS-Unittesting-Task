const filterArray = require("./utils/filterArray");
const mapArray = require("./utils/mapArray");
const reduceArray = require("./utils/reduceArray");
const findArray = require("./utils/findArray");

let arr = [1,2,3,4,5];

//This would be [2,3,4,5]
console.log(filterArray(arr,(item)=>{
    return item >= 2;
}));
//This would be [5,10,15,20,25]
console.log(mapArray(arr,(item)=>{
    return item * 5;
}));
//This would be 15
console.log(reduceArray(arr,(prev,curr)=>{
    return prev + curr;
}));
//This would be a typeerror
console.log(reduceArray([],(prev,curr)=>{
    return prev - curr;
}));
//This would be 4
console.log(findArray(arr,(item)=>{
    return item >= 4;
}));
//This would be undefined
console.log(findArray(arr,(item)=>{
    item == 2;
}));
