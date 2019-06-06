// 排序算法
const sortTestConfig = require('./sort/test.config.js');
const bubbleSort = require('./sort/bubble.js');
const quickSort = require('./sort/bubble.js');
/**
 *全局测试
 *
 * @param {Array} t
 * @param {Function} cb
 */
function runTest (t, cb) {
  try {
    const startTime = Date.now();
    let result = [];
    t.forEach(test => {
      if (!cb) {
        throw '无检测目标'
      } else {
        result.push(cb(test));
      }
    });
    const endTime = Date.now();
    return {
      startTime,
      endTime,
      time: `${endTime - startTime}ms`,
      result,
    };
  } catch (error) {
    console.log(error);
  }
}

let bubbleSortResult = runTest(sortTestConfig, bubbleSort);
let quickSortResult = runTest(sortTestConfig, bubbleSort);
