// 快速排序
// 有问题：容易OMM，堆栈溢出
function quickSort (nums) {
  const l = nums.length;
  if (l <= 1) return nums;
  let basic = nums[0], left = [], right = [];
  for (let i = 1; i < l; i++) {
    const vi = nums[i];
    if (vi <= basic) left.push(vi);
    if (vi > basic) right.push(vi);
  }
  return quickSort(left).concat(basic, quickSort(right));
}
// let r = quickSort([2,3,1,5,28])
module.exports = quickSort;