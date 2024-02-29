// 给你一个按 非递减顺序 排序的整数数组 nums，返回
// "每个数字的平方" 组成的新数组，要求也按 "非递减顺序" 排序。

let nums = [-7, -3, 2, 3, 11];

squareOfArray = (nums) => {
  let newArray = [];
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    leftSquare = nums[left] * nums[left];
    rightSquare = nums[right] * nums[right];
    if (leftSquare <= rightSquare) {
      newArray.unshift(rightSquare);
      right--;
    }
    if (leftSquare > rightSquare) {
      newArray.unshift(leftSquare);
      left++;
    }
  }
  newArray.unshift(nums[right] * nums[right]);
  return newArray;
};

let result = squareOfArray(nums);
console.log(result);
