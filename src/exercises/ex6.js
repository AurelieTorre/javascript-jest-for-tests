// une array de test pour mes console.log
const tab = [3, 7, 0, -6, 3];

// trouver le maximum d'une série de nombres
const findMax = (numbers) => {
	if (!Array.isArray(numbers) || numbers.length === 0) {
		throw new Error('Invalid input: an array of numbers is required');
	}
	return Math.max(...numbers);
};

console.log(findMax(tab));

// retirer les doublons d'une array
const removeDuplicates = (array) => {
	if (!Array.isArray(array)) {
		throw new Error('Invalid input: an array is required');
	}
	return [...new Set(array)];
};

console.log(removeDuplicates(tab));

// vérifier qu'une valeur est dans une array
const includesValue = (array, value) => {
	if (!Array.isArray(array)) {
		throw new Error('Invalid input: an array is required');
	}
	return array.includes(value);
};

console.log(includesValue(tab, -5));

// ranger les items d'une array dans l'ordre croissant
const sortArray = (array) => {
	if (!Array.isArray(array)) {
		throw new Error('Invalid input: an array is required');
	}
	return array.slice().sort((a, b) => a - b);
};

console.log(sortArray(tab));

module.exports = { findMax, removeDuplicates, includesValue, sortArray };