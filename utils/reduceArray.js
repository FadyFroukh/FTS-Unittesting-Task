function reduceArray(array,reduceFn){
    if (array.length === 0){
        return new TypeError("Reduce Operation Doesn't Work On Empty Array");
    }else {
        let finalVal = 0;
        for (let i =0; i < array.length; i++){
        finalVal = reduceFn(finalVal,array[i],i,array);
        }
        return finalVal;
    }
}

module.exports = reduceArray;