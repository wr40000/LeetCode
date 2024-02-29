// 给你一个按 非递减顺序 排序的整数数组 nums，返回
// "每个数字的平方" 组成的新数组，要求也按 "非递减顺序" 排序。

let nums = [-7, -3, 2, 3, 11];

squareOfArray = (nums) => {
  let newArray = new Array(nums.length);
  let i = 0;
  let j = nums.length - 1;
  for (let k = nums.length - 1; k >= 0; k--) {
    let squareI = nums[i] * nums[i];
    let squareJ = nums[j] * nums[j];
    if (squareI < squareJ) {
      newArray[k] = squareJ;
      j--;
    } else if (squareI > squareJ) {
      newArray[k] = squareI;
      i++;
    } else if (squareI == squareJ && i != j) {
      newArray[k] = squareI;
      i++;
    } else {
      newArray[k] = squareI;
    }
    // console.log("i,j,k: ", i, j, k);
  }
  return newArray;
};

let result = squareOfArray(nums);
console.log(result);
