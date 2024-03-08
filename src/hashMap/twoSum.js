// 1. 两数之和
// + 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出
//      和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// + 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不
//      能重复出现。
// + 你可以按任意顺序返回答案。

 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 第一次提交
// var twoSum = function (nums, target) {
//     let arr = {}
//     debugger
//     for (let i = 0; i < nums.length; i++) {
//         let item = target - nums[i];
//         if(arr[item] !== undefined){
//             return [i, arr[item]]
//         }
//         arr[nums[i]] = i
//     }
//     return []
// };

// 第二次提交
var twoSum = function (nums, target) {
    let map = new Map();
    let len = nums.length;
    let tar;
    for (let i = 0; i < len; i++) {
        debugger
        tar = target - nums[i];
        if (!map.has(tar)) {
            map.set(nums[i], i)
        } else {
            let index = map.get(tar)
            return [i, index]
        }
    }
    return []
};
let nums = [2,7,11,15]
let target = 9;
let result = twoSum(nums, target)
console.log(result);