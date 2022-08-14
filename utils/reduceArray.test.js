const { expect } = require("expect");
const reduceArray = require("./reduceArray");

let arr = [1,2,3,4,5];

test("To return 15 from the function",()=>{
    expect(reduceArray(arr,(prev,curr)=>{
        return prev+curr;
    })).toStrictEqual(15);
});

test("To not return undefined from the function",()=>{
    expect(reduceArray(arr,(prev,curr)=>{
        return prev * curr;
    })).not.toStrictEqual(undefined);
});

test("To not return null from the function",()=>{
    expect(reduceArray(arr,(prev,curr)=>{
        return prev * curr;
    })).not.toStrictEqual(null);
});

test("To return undefined from the function",()=>{
    expect(reduceArray(arr,(prev,curr)=>{
        //without return
        prev * curr;
    })).toStrictEqual(undefined);
});

test("To throw an error from the function",()=>{
    expect(reduceArray([],(prev,curr)=>{
        return prev*curr;
    })).toStrictEqual(TypeError("Reduce Operation Doesn't Work On Empty Array"));
});