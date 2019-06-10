// 排序算法
const sortTestConfig = require('./sort/test.config.js');
const bubbleSort = require('./sort/bubble.js');
const quickSort = require('./sort/quick.js');
const insertionSort = require('./sort/insertion.js');
const selectionSort = require('./sort/selection.js');
/**
 * 全局测试
 *
 * @param {Array} t 数据组
 * @param {Function} cb 检测的算法
 * @returns {Object} 一些结果
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

// let bubbleSortResult = runTest(sortTestConfig, bubbleSort);
// let quickSortResult = runTest(sortTestConfig, quickSort);
// let insertionSortResult = runTest(sortTestConfig, insertionSort);
let selectionSortResult = runTest(sortTestConfig, selectionSort);

// console.log(bubbleSortResult.time);
// console.log(quickSortResult.time);
// console.log(insertionSortResult.time);
console.log(selectionSortResult.time);