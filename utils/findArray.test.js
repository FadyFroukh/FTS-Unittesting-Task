const { expect } = require("expect");
const findArray = require("./findArray");

let arr = [1,2,3,4,5];


test("To return 3 from the function",()=>{
    expect(findArray(arr,(item)=>{
        return item >= 3;
    })).toStrictEqual(3);
});

test("To return undefined from the function",()=>{
    expect(findArray(arr,(item)=>{
        return item >= 10;
    })).toStrictEqual(undefined)
});

test("To return undefined from the function",()=>{
    expect(findArray(arr,(item)=>{
        //without return
        item = 2;
    })).toStrictEqual(undefined);
});

test("To return 1 from the function",()=>{
    expect(findArray(arr,(item)=>{
        return item == 1 || item == 3;
    })).toStrictEqual(1);
});

test("To return undefined from the function",()=>{
    expect(findArray(arr,(item)=>{
        return item == 13 && item > 23;
    })).toStrictEqual(undefined);
});

test("To return undefined from the function",()=>{
    expect(findArray([],(item)=>{
        return item == 2;
    })).toStrictEqual(undefined);
});