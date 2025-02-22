function subarraySumFixed(nums, k) {
  // WRITE YOUR BRILLIANT CODE HERE
  let window_sum = 0;
  let largest = 0;
  for (let i = 0; i < k; i++) {
    window_sum = window_sum + nums[i];
  }

  for (let i = k; i < nums.length; i++) {
    window_sum = window_sum + nums[i] - nums[i - k];
    largest = Math.max(largest, window_sum);
  }
  return largest;
}

let result = subarraySumFixed([1, 2, 3, 7, 4, 1], 3);
console.log(result);
