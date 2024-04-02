// 207. 课程表
// 提示
// 你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。

// 在选修某些课程之前需要一些先修课程。 先修课程按数组 prerequisites 给出，
// 其中 prerequisites[i] = [ai, bi] ，表示如果要学习课程 ai 则 必须 先学
// 习课程  bi 。

// 例如，先修课程对 [0, 1] 表示：想要学习课程 0 ，你需要先完成课程 1 。
// 请你判断是否可能完成所有课程的学习？如果可以，返回 true ；否则，返回 false 。

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  let map = new Map();
  let courseArr = new Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    courseArr[prerequisites[i][0]]++;
    map.has(prerequisites[i][1])
      ? map.get(prerequisites[i][1]).push(prerequisites[i][0])
      : map.set(prerequisites[i][1], [prerequisites[i][0]]);
  }
  let queue = [];
  let count = 0;
//   debugger;
  for (let i = 0; i < courseArr.length; i++) {
    if (courseArr[i] == 0) {
      queue.push(i);
    }
  }
  while (queue.length !== 0) {
    count++;
    let top = queue.pop();
    let key = map.get(top);
    if (key && key.length) {
      for (let i = 0; i < key.length; i++) {
        courseArr[key[i]]--;
        if (courseArr[key[i]] == 0) {
          queue.push(key[i]);
        }
      }
    }
  }
  return count == numCourses;
};

let prerequisites = [
  [1, 4],
  [2, 4],
  [3, 1],
  [3, 2],
];
let numCourses = 5;
let result = canFinish(numCourses, prerequisites);
console.log(result);
