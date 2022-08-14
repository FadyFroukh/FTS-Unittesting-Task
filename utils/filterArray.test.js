const { expect } = require("expect");
const filterArray = require("./filterArray");

let arr = [1,2,3,4,5];

test("To Return [3,4,5] from the function",()=>{
    expect(filterArray(arr,(item)=>{
        return item >= 3;
    })).toStrictEqual([3,4,5]);
});


test("To not return null from the function",()=>{
    expect(filterArray(arr,(item)=>{
        return item >= 6;
    })).not.toStrictEqual(null);
});

test("To not return undefined from the function",()=>{
    expect(filterArray(arr,(item)=>{
        return item >= 10;
    })).not.toStrictEqual(undefined);
});

test("To return [] from the function",()=>{
    expect(filterArray(arr,(item)=>{
        //without return
        item = 1;
    })).toStrictEqual([]);
});

test("To return [1,3] from the function",()=>{
    expect(filterArray(arr,(item)=>{
        return item == 1 || item == 3;
    })).toEqual([1,3]);
});

test("To return [] from the function",()=>{
    expect(filterArray([],(item)=>{
        return item >= 1;
    })).toStrictEqual([]);
});