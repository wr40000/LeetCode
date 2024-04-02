let arr = [1, [2, [3]]];

function flatten(arr){
    let res = [];
    arr.forEach((item)=>{
        if(Array.isArray(item)){
            res.push(...flatten(item))
        }else{
            res.push(item)
        }
    })
    return res
}
console.log(flatten(arr));
console.log([1, [2, [3]]].flat(2));