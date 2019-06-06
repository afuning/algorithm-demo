// 由小到大排序
// 冒泡算法
function bubbleSort (nums) {
    let l = nums.length;
    for (let i = 0; i < l; i ++) {
        for (let j = 0; j < l - i - 1; j++) {
            let p = nums[j];
            let n = nums[j + 1];
            if (p > n) {
                nums[j + 1] = p;
                nums[j] = n;
            }
        }
    }
    return nums;
}

console.log(bubbleSort([10, 11, 8, 8, 0]));
