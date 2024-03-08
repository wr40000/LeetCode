// 11. 盛最多水的容器
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点
// 是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

/**
 * @param {number[]} height
 * @return {number}
 */

// 一开始两个指针一个指向开头一个指向结尾，此时容器的底是最大的，
// 接下来随着指针向内移动，会造成容器的底变小，在这种情况下想要
// 让容器盛水变多，就只有在容器的高上下功夫。 那我们该如何决策哪
// 个指针移动呢？我们能够发现不管是左指针向右移动一位，还是右指针
// 向左移动一位，容器的底都是一样的，都比原来减少了 1。这种情况下
// 我们想要让指针移动后的容器面积增大，就要使移动后的容器的高尽量大，
// 所以我们选择指针所指的高较小的那个指针进行移动，这样我们就保留
// 了容器较高的那条边，放弃了较小的那条边，以获得有更高的边的机会。

var maxArea = function (height) {
  // 大量数据会超时
  //   let left = 0;
  //   let max = 0;
  //   let val;
  //   let len = height.length;
  //   debugger;
  //   while (left < len - 1) {
  //     for (let i = left + 1; i < len; i++) {
  //       val = Math.min(height[i], height[left]) * (i - left);
  //       max = max > val ? max : val;
  //     }
  //     left++;
  //   }
  //   return max;
  //   方法二，思路来自评论，代码自己写
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  let val;
  debugger;
  while (left < right) {
    val = Math.min(height[right], height[left]) * (right - left);
    max = max > val ? max : val;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

let height = [1,2,4,3]
let result = maxArea(height);
console.log(result);
