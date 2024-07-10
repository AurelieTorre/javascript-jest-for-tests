
const { findMax, removeDuplicates, includesValue, sortArray } = require('./ex6');

describe('findMax', () => {

    test('should return the maximum value in an array of numbers', () => {
        const numbers = [1, 3, 7, 2, 5];
        const max = findMax(numbers);
        expect(max).toBe(7);
    });
});

describe('unduplicate', () => {

    test('should return an array with one value of each', () => {
        const array = ['didi', 'dudu', 'ba', 'bi', 'ba'];
        const res = ["didi", "dudu", "ba", "bi"];
        const set = removeDuplicates(array);
        expect(set).toEqual(res);
    });
});

describe('includesValue', () => {
    test('should return true if the array includes the value', () => {
        const array = [1, 2, 3, 4, 5];
        const value = 3;
        const result = includesValue(array, value);
        expect(result).toBe(true);
    });
});

describe('sortArray', () => {
    test('should return a sorted array in ascending order', () => {
        const array = [5, 3, 8, 1, 2];
        const sortedArray = sortArray(array);
        expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
    });
});