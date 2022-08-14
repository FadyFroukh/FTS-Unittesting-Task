function findArray(array,findFn){
    let find;
    for (let i = 0; i < array.length; i++){
      if(findFn(array[i],i,array)){
        find = array[i];
        break;
      }
    }
    return find;
}

module.exports = findArray;