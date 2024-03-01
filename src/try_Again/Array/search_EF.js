let nums = [-1,0,3,5,9,12];
let target = 13;

// 注意点：
// 1. let right = nums.length;而非let right = nums.length - 1;
// 2. while (left <= right) 而非 while (nums[left] <= nums[right])

// 左闭右闭
let func1 = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;
  while (left <= right) {
    middle = left + ((right - left) >> 1);
    if (nums[middle] > target) {
      right = middle - 1;
    }
    if (nums[middle] < target) {
      left = middle + 1;
    }
    if (nums[middle] == target) {
      return middle;
    }
  }
  return -1;
};
let result1 = func1(nums, target);
console.log("result1: ", result1);

// 左闭右闭
let func2 = (nums, target) => {
  let left = 0;
  let right = nums.length;
  let middle = 0;
  while (left < right) {
    middle = left + ((right - left) >> 1);
    if (nums[middle] > target) {
      right = middle - 1;
    }
    if (nums[middle] < target) {
      left = middle + 1;
    }
    if (nums[middle] == target) {
      return middle;
    }
  }
  return -1;
};
let result2 = func2(nums, target);
console.log("result2: ", result2);
