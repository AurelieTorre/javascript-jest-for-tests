const tab = [3, 7, 0, -6, 3];

const findMax = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Invalid input: an array of numbers is required');
    }
    return Math.max(...numbers);
};

console.log(findMax(tab));

const removeDuplicates = (array) => {
    if (!Array.isArray(array)) {
        throw new Error('Invalid input: an array is required');
    }
    return [...new Set(array)];
};

console.log(removeDuplicates(tab));

const includesValue = (array, value) => {
    if (!Array.isArray(array)) {
        throw new Error('Invalid input: an array is required');
    }
    return array.includes(value);
};

console.log(includesValue(tab, -5));

const sortArray = (array) => {
    if (!Array.isArray(array)) {
        throw new Error('Invalid input: an array is required');
    }
    return array.slice().sort((a, b) => a - b);
};

console.log(sortArray(tab));

module.exports = { findMax, removeDuplicates, includesValue, sortArray };