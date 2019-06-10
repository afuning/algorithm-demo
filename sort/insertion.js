
/**
 * 插入排序
 * 
 * @param {Array} nums
 */
function insertionSort (nums) {
  const l = nums.length;
  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[i]) {
        nums.splice(j, 0, nums[i]);
        nums.splice(i + 1, 1);
        break;
      }
    }
  }
  return nums;
}
module.exports = insertionSort;