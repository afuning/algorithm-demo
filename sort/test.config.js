function newArrayTest (n) {
  const maxSize = 100;
  const maxNum = 100;
  let r = [];
  for (let i = 0; i < n; i++) {
    let o = [];
    let realSize = parseInt(Math.random() * maxSize);
    if (realSize === 0) o.push([]);
    for (let j = 0; j < realSize; j++) {
      const cv = parseInt(Math.random() * maxNum);
      o.push(cv);
    }
    r.push(o);
  }
  return r;
}
module.exports = [
  [],
  [1],
  [2,3],
  [3,2],
  ...newArrayTest(1000),
];