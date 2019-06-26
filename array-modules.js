function map(arr, callback) {
  const mappedArray = [];
  for(let i = 0; i < arr.length; i++) {
    // use callback for each index, return new array, push to array
    const mappedValue = callback(arr[i]);
    mappedArray.push(mappedValue);
  }
  return mappedArray;
}

function filter(arr, callback) {
  const filteredArray = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      let returnNumb = i;
      return returnNumb;
    } 
  }
  let returnNumb = -1;
  return returnNumb;  
}

function reduce(arr, callback, initialVal) {
  let acc = initialVal;
  let i = 0;

  if(initialVal === undefined) {
    acc = arr[0];
    i = 1;
  }
  for(i; i < arr.length; i++) {
    acc = callback(acc, arr[i]);    
  }
  return acc;
}

module.exports = {
  map,
  filter,
  findIndex,
  reduce,
};
