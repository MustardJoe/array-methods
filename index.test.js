const { map, filter } = require('./array-modules');


describe('my hand made array methods', () => {
    it('map test using double', () => {
        const array1 = [1, 2, 4, 8];
        
        function double(num) {
            return num * 2;
        } //double => 

        const mappedArray = map(array1, double);
        expect(mappedArray).toEqual([2, 4, 8, 16]);
    });

    it('returns an array that has been filtered', () => {
        const array3 = [2, 6, 80, 100, 7, 33];

        function greaterT10(num) {
            if(num >= 10) {
                return true;
            }
        }

        const filteredArray = filter(array3, greaterT10);

        expect(filteredArray).toEqual([80, 100, 33]);
    });
});