function moveZeroToEnd(arr) {
  let slowpointer = 0;

  for (let fastpointer = 0; fastpointer < arr.length; fastpointer++) {
    if (arr[fastpointer] != 0) {
      let temp = arr[slowpointer];
      arr[slowpointer] = arr[fastpointer];
      arr[fastpointer] = temp;

      slowpointer++;
    }
  }

  return arr;
}

let res = moveZeroToEnd([1, 0, 2, 0, 0, 7]);
console.log(res);
