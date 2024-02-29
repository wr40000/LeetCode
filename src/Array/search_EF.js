let nums = [-1, 0, 1, 3, 5, 9, 12];
let target = 12;

// 左闭右闭区间
let searchEF1 = (nums, target) => {
  let left = 0;
  let mid = 0;
  let right = nums.length;

  while (left <= right) {
    mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

let result1 = searchEF1(nums, target);
console.log("result-左闭右闭区间 [left, right]: ", result1);

// 左闭右开区间
let searchEF2 = (nums, target) => {
  let left = 0;
  let mid = 0;
  let right = nums.length;
  while (left < right) {
    mid = left + ((right - left) >> 1);
    // console.log(left, right);
    // console.log("mid: ", mid);
    // console.log("nums[mid]: ", nums[mid]);
    // 如果中间值大于目标值，中间值不应在下次查找的范围内，
    // 但中间值的前一个值应在；由于right本来就不在查找范围内，
    // 所以将右边界更新为中间值，如果更新右边界为mid-1则将中
    // 间值的前一个值也踢出了下次寻找范围
    if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

let result2 = searchEF2(nums, target);
console.log("result-左闭右开区间 [left, right): ", result2);
