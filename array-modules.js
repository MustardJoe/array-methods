function map(arr, callback) {
    const mappedArray = [];
    for(let i = 0; i < arr.length; i++) {
        // use callback for each index, return new array, push to array
        const mappedValue = callback(i);
        mappedArray.push(mappedValue);
    }
    return mappedArray;
}

module.exports = map;