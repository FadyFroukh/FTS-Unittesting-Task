function mapArray(array,mapFn){
    let mapped = [];
    for (let i = 0; i < array.length; i++){
      mapped.push(mapFn(array[i],i,array))
    }
    return mapped;
}

module.exports = mapArray;