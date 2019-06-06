function quickSort (nums) {
  const l = nums.length;
  if (l <= 1) return nums;
  let basic = nums[0], left = [], right = [],
  for (let i = 0; i < l; i++) {
    const vi = nums[i];
    if (vi <= basic) left.push(vi);
    if (vi > basic) right.push(vi);
  }
  return quickSort(left).concat(basic, quickSort(right));
}
module.exports = quickSort;