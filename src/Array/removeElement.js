let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

removeElement = (nums, val) => {
    let k = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k
};

let result = removeElement(nums, val);
console.log("移除元素后新数组的长度为: ", result);