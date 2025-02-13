// Given an array of integers sorted in ascending order, find two numbers that add up to a given target. Return the indices of the two numbers in ascending order. You can assume elements in the array are unique and there is only one solution. Do this in O(n) time and with constant auxiliary space.

// Input:

// arr: a sorted integer array
// target: the target sum we want to reach
// Sample Input: [2, 3, 4, 5, 8, 11, 18], 8

// Sample Output: 1 3

function twoSum(arr) {
  let left_pointer = 0;
  let right_pointer = arr.length - 1;
  let result = [];

  while (left_pointer < right_pointer) {
    if (arr[left_pointer] + arr[right_pointer] == target) {
      // for single values or one pair of indices
      //   return arr[left_pointer] + " " + arr[right_pointer];
      // For Finding Multiple Indices
      result.push([arr[left_pointer], arr[right_pointer]]);
      left_pointer++;
      right_pointer--;
    } else if (arr[left_pointer] + arr[right_pointer] > target) {
      right_pointer--;
    } else {
      left_pointer++;
    }
  }

  return result;
  //   console.log(arr);
}

let target = 8;
let input = [1, 2, 4, 5, 6, 7, 9];
let res = twoSum(input);
console.log(res);
