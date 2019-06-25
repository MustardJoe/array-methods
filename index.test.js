const { map, filter, findIndex, reduce } = require('./array-modules');


describe('my hand made array methods', () => {
    it('map test using double', () => {
        const array1 = [1, 2, 4, 8];
        
        function double(num) {
            return num * 2;
        } //double => 

        const mappedArray = map(array1, double);
        expect(mappedArray).toEqual([2, 4, 8, 16]);
    });

    describe('filter tests', () => {

        it('returns an array', () => {
            const numbers = [1, 2, 3,];
            const filtered = filter(numbers, number => number + 1);
            expect(filtered).toEqual(expect.any(Array));
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

    describe('findIndex func', () => {
        it('takes an array, returns numb', () => {
            const array1 = [1, 2, 4, 8];

            const foundThing = findIndex(array1, number => number === 4);

            expect(foundThing).toEqual(expect.any(Number));

        });
        it('returns -1 if thng not in array', () => {
            const array5 = ['blue', 'red'];
            const foundThing = findIndex(array5, color => color.includes('y'));

            console.log(foundThing);
            expect(foundThing).toEqual(-1);
        });
        it('returns the index for the array item we want', () => {
            const array1 = [1, 2, 4, 8];

            const foundThing = findIndex(array1, number => number === 4);
            expect(foundThing).toEqual(2);
        });
    });

    describe('reduce function', () => {
        it('iterates through an array and invokes callback', () => {
            const numbers = [1, 2, 3];
            const callback = jest.fn();

            reduce(numbers, callback, 0);

            expect(callback).toHaveBeenCalledTimes(numbers.length);
        });

        it('iterates through array and sets the acc with results of callback', () => {
            const numbers = [1, 2, 3];

            const sum = reduce(numbers, (acc, item) => acc + item, 0);
            expect(sum).toEqual(6);
        });

        it('works even if we dont provide initial values', () => {
            const numbers = [1, 2, 3];

            const sum = reduce(numbers, (acc, item) => acc + item);
            expect(sum).toEqual(6);
        });
    });
});