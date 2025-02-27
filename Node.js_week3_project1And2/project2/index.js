const _ = require('lodash');

// Sample array of numbers
const numbers = [10, 5, 8, 20, 15, 2];

// Find min and max using lodash
const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);

console.log(`Maximum Number: ${maxNumber}`);
console.log(`Minimum Number: ${minNumber}`);
