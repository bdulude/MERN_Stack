// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// inputs
// k = 16
// arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are included in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0]
// ]

// create new arrays
// if no matches, return empty array

/*
    Create a function that takes in an array and target value
    Create two indices that keep track of the sum start and the element being added
    Create a sum variable
    Create a result array
    Create a for loop that iterates over the array for start sum index
        Create current sum array
        Create a while loop that continues while sum is less than or equal to 16 
            sum currently selected element with the element added index
            push element being summed to the sum array
            if the sum is equal to the target, add sum array to the result array
            iterate element added index
    return result array


*/

function findConsecutiveSums(arr, target) { 
    let result = [];
    for (let sumStart = 0; sumStart < arr.length; sumStart++) {
        let sum = 0;
        let index = sumStart;
        let currentSumArray = [];
        while (sum <= target) {
            sum += arr[index];
            currentSumArray.push(arr[index]);
            index++;
            if (sum == target) {
                result.push([...currentSumArray]);
            }
        }
    }
    return result;
}

console.log(findConsecutiveSums([2,5,3,6,7,0,0,23,11], 16));