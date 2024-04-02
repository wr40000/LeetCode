// 78. 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的
// 子集
// （幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // 储存结果的数组
    // 初始状态要含有一个空数组，即无任何元素的子集
    // 空数组的存在是为了开启第二层循环
    let result = [[]];
  
    // 每次从nums中取出一个元素，作为新子集的元素
    for (let i = 0; i < nums.length; i++) {
      // 获取当前的子集数量进行遍历，避免循环过程中result长度不断变化
      const length = result.length;
      // 在现有子集的基础上，添加当前元素，生成新的子集
      for (let j = 0; j < length; j++) {
        result.push([...result[j], nums[i]]);
      }
    }
  
    return result;
  };
  
let nums = [1, 2, 3];
let result = subsets(nums);
console.log(result);
