//满足两点：参数子集，返回新函数
//作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行。
function curry (fn, ...arge1) {
  return (...arges) => {
    return fn.apply(this, [...arge1, ...arges])
  }
}
