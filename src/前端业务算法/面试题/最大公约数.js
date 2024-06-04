/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    debugger
    nums.sort((a, b) => {
        return a - b
    })
    let temp = null;
    function handle(min, max) {
        while (true) {
            temp = max % min;
            if (temp == 0) {
                return min
            }
            max = min;
            min = temp;
        }
    }
    handle(nums[0], nums[nums.length - 1])
    return temp
};

let nums = [2,5,6,9,10]
findGCD(nums) // 2