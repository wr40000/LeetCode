function _runTask(task, callback) {
  requestIdleCallback((idle) => {
    if (idle.timeRemaining() > 0) {
      task();
      callback();
    } else {
      _runTask(task, callback);
    }
  });
}
// 兼容写法
function _runTask(task, callback) {
  let start = Date.now();
  requestAnimationFrame(() => {
    if (Date.now() - start < 16.6) {
      task();
      callback();
    } else {
      _runTask(task, callback);
    }
  });
}
/**
 * 执行耗时任务
 * @param {Function} task
 * @returns
 */
function runTasks(task) {
  return new Promise((resolve) => {
    _runTask(task, resolve);
  });
}
