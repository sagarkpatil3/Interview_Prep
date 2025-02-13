// Program to remove Duplicates from array

function removeDuplicates(arr) {
  let slow_pointer = 0;

  for (let fast_pointer = 1; fast_pointer < arr.length; fast_pointer++) {
    // console.log(arr[i]);
    // If Fast pointer is not equal to the iterated array slow_pointer value then upadte slow pointer by 1 and update the array value by arr[fastpointer]
    if (arr[fast_pointer] !== arr[slow_pointer]) {
      slow_pointer++;
      arr[slow_pointer] = arr[fast_pointer];
    }
  }

  // Return the Non duplicate array
  let res = arr.slice(0, slow_pointer + 1);
  return res;
}

removeDuplicates([1, 1, 3, 4, 5, 78]);
