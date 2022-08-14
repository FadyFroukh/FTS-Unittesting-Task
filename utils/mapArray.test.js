const { expect } = require("expect");
const mapArray = require("./mapArray");

let arr = [1,2,3,4,5];

test("To return [2,4,6,8,10] from the function",()=>{
    expect(mapArray(arr,(item)=>{
        return item * 2;
    })).toStrictEqual([2,4,6,8,10]);
});

test("To not return null from the function",()=>{
    expect(mapArray(arr,(item)=>{
        return item * 5;
    })).not.toStrictEqual(null);
});

test("To not return undefined from the function",()=>{
    expect(mapArray(arr,(item)=>{
        return item * 7;
    })).not.toStrictEqual(undefined);
});

test("To return [] from the function",()=>{
    expect(mapArray(arr,(item)=>{
        //without return
         item - 2;
    })).toEqual([]);
});

test("To Return [false,false,true,true,true] from the function",()=>{
    expect(mapArray(arr,(item)=>{
        return item >= 3;
    })).toStrictEqual([false,false,true,true,true]);
});


test("To return [] from the function",()=>{
    expect(mapArray([],(item)=>{
        return item + 5;
    })).toStrictEqual([]);
});