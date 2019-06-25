function map(arr, callback) {
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++) {
        // use callback for each index, return new array, push to array
        const mappedValue = callback(arr[i]);
        mappedArray.push(mappedValue);
    };
    return mappedArray;
};

function filter(arr, callback) {
    const filteredArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            filteredArray.push(arr[i]);
        }
    };
    return filteredArray;
};

function findIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            let returnNumb = i;
            return returnNumb;
        } 
    };
    let returnNumb = -1;
    return returnNumb;  
};

module.exports = {
    map,
    filter,
    findIndex,
};