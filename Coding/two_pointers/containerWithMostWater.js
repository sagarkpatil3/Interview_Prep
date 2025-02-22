// Container With Most Water
// Given an array representing heights of vertical lines, find the maximum area of water trapped between two lines.

// Input: [1,8,6,2,5,4,8,3,7].

// Output: 49.

function containerWithMostWater(arr) {
  let left = 0; // Left pointer starts at the beginning of the array
  let right = arr.length - 1; // Right pointer starts at the end of the array
  let max_area = 0; // Variable to store the maximum area found

  while (left < right) {
    // Calculate the area between the two pointers
    let area = Math.min(arr[left], arr[right]) * (right - left);

    // Update the max_area if the new area is larger
    max_area = Math.max(max_area, area);

    // Move the pointer pointing to the smaller height
    if (arr[left] < arr[right]) {
      left++; // Move left pointer to the right
    } else {
      right--; // Move right pointer to the left
    }
  }

  return max_area; // Return the maximum area found
}

// Example usage:
let result = containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result); // Output: 49
