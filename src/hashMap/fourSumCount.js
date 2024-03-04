// 454. 四数相加 II
// 中等
// 给你四个整数数组 nums1、nums2、nums3 和 nums4 ，数组长度都是 n ，
// 请你计算有多少个元组 (i, j, k, l) 能满足：

// + 使用 Map.get() 查找元素，效率更高

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let sum12 = new Map();
  let len = nums1.length;
  for (let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++){
        let sumIJ = nums1[i]  + nums2[j];
        let val = sum12.get(sumIJ)
        if(!val){
            sum12.set(sumIJ, 1);
        }else{
          sum12.set(sumIJ, val + 1)
        }
    }
  }
  let count = 0
  for (let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++){
        let sumKW = -(nums3[i]  + nums4[j]);
        let val = sum12.get(sumKW)
        if(val){
            count += val
        }
    }
  }
  return count
// 代码随想录
// ...
};

let nums1 = [0],
  nums2 = [0],
  nums3 = [0],
  nums4 = [0];
  console.time("end")
  let result = fourSumCount(nums1, nums2, nums3, nums4);
  console.timeEnd("end")
console.log(result);
