// const nums: number[] = [-1,0,3,5,9,12];
// const target:number = 9;
const nums: number[] = [1, 2, 3, 4, 7, 9, 10];
const target:number = 2;

function search1(nums:number[], target:number):number{
    let length = nums.length;
    let left:number = 0;
    let right:number = length - 1;
    while(left <= right){
        let middle:number = left +  ((right - left) >> 1);
        if(nums[middle] < target){
            left = middle + 1;
        }else if(nums[middle] > target){
            right = middle - 1;
        }else{
            return middle
        }
    }
    return -1;
}
function search2(nums:number[], target:number):number{
    let length = nums.length;
    let left:number = 0;
    let right:number = length - 1;
    while(left < right){
        let middle:number = left +  ((right - left) >> 1);
        if(nums[middle] < target){
            left = middle + 1;
        }else if(nums[middle] > target){
            right = middle;
        }else{
            return middle
        }
    }
    return -1;
}
const func = (item:number,index:number)=>{  
    if(item == target) return index
};
const index = nums.findIndex(func)
const result1 = search1(nums,target);
const result2 = search2(nums,target);
console.log("左闭右闭result: ",result1);
console.log("左闭右开result: ",result2);
console.log("Array.prototype.findIndex(): ",index);
