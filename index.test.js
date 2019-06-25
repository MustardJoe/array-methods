const map = require('./array-modules');

function double(num) {
    return num * 2;
}

describe('my hand made array methods', () => {
    it('map test using double', () => {
        const array1 = [1, 2, 4, 8];
        const array2 = map(array1, double);
        expect(array2).toEqual([2, 4, 8, 16]);
    });
});