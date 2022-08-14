function filterArray(array,filterFn){
    let filtered = [];
    for (let i = 0; i < array.length; i++){
      if (filterFn(array[i],i,array)){
        filtered.push(array[i]);
      }
    }
    return filtered;
  }
module.exports = filterArray;