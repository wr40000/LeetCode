// https://blog.csdn.net/weixin_46726346/article/details/115839126

function fn(arr,begin,end){
    if(begin < end){
        let i = begin;
        let j = end;
        let temp = arr[begin];
        while(i<j){
            while(arr[j] >=temp && i<j ){
                j--
            }
            arr[i] = arr[j];
            while(arr[i] <=temp && i<j){
                i++
            }
            arr[j] = arr[i]
        }
        arr[i] = temp;
        fn(arr, begin, i -1);
        fn(arr, i + 1, end)
    }else{
        return
    }
}
function sortFast(arr){
    fn(arr, 0, arr.length - 1)
}

let arr = [2,3,1,4,8,7,9,6];
sortFast(arr,0,7);
console.log(arr);