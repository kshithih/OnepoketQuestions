//Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

function sumArrayIntegers(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array.');
    }
  
    const sum = arr.reduce((total, num) => {
      if (typeof num !== 'number' || !Number.isInteger(num)) {
        throw new Error('Array must contain only integers.');
      }
      return total + num;
    }, 0);
  
    return sum;
  }

  
const inputArray = [1, 2, 3, 4, 5];
const result = sumArrayIntegers(inputArray);
console.log(result); // Output: 15
