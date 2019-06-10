/**
 * 选择排序
 * 不稳定排序
 * 
 * @param {*} nums
 */
function selectionSort (nums) {
  const l = nums.length;
  let temp;
  for (let i = 0; i < l - 1; i++) {
    let min = i;
    for (let j = i + 1; j < l; j ++) {
      if (nums[min] > nums[j]) {
        min = j;
      }
    }
    temp = nums[i];
    nums[i] = nums[min];
    nums[min] = temp;
  }
  return nums;
}
// console.log(selectionSort([2,3,1,5,28]));
module.exports = selectionSort;
